import React, { useEffect, useRef, useState } from "react"

import Button from "../common/Button";
import Modal from "../common/Modal";
import { ReactComponent as AnswerIcon } from "@/assets/icons/icon-answer.svg";
import { answerApi } from "../../api/answerApi";
import z from "zod";
import { showToast } from "../../utils/toast";

interface MemoFormProps {
  questionId: number;
  initialMemo?: string;
  onMemoChanged?: (newMemo: string) => void;
}

export default function MemoForm({ questionId, initialMemo = "", onMemoChanged }: MemoFormProps) {

  const [memoValue, setMemoValue] = useState<string>(initialMemo);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasSavedMemo = initialMemo.trim().length > 0;

  const containerRef = useRef<HTMLHRElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);


  const memoSchema = z.string().max(200, "200자 이상 입력할 수 없어요");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    const value = e.target.value;
    const result = memoSchema.safeParse(value);
    if (!result.success) {
      setErrorMessage(result.error.issues[0].message);
    } else {
      setErrorMessage(null);
    }

    setMemoValue(value);
  };

  useEffect(() => {
    setMemoValue(initialMemo);
  }, [initialMemo]);

  useEffect(() => {
    if(textareaRef.current){
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 실제 내용 높이로 맞추기
    }
  }, [memoValue]);

  const handleFocus = () => setIsFocused(true);

  // 메모 저장, 수정 핸들러
  const handleSaveMemo = async () => {

    // 수정없을 시 api 호출 안함
    if (memoValue.trim() === "" || memoValue === initialMemo) return;

    try{
      if(!initialMemo){
        // 새 메모 작성 : POST
        await answerApi.postAnswer(questionId, {answerText: memoValue});
        onMemoChanged?.(memoValue);
        showToast("답변을 저장했어요");
      } else{
        // 메모 수정 : PUT
        await answerApi.putAnswer(questionId, {answerText: memoValue});
        showToast("수정을 완료했어요");
      }
      setIsEditing(false);
    } catch(err) {
      console.error("메모 저장 오류")
    }
  };

  const handleUpdateMemo = () => {
    setIsEditing(true);
  }

  const handleDeleteMemo = async () => {

    try{
      await answerApi.deleteAnswer(questionId);
      setIsModalOpen(false);
      setMemoValue("");
      setIsEditing(false);
      onMemoChanged?.("");
      showToast("답변을 삭제했어요");
    } catch(err){
      console.error("메모삭제 오류", err);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`p-4 w-full bg-greyscale-900 rounded-xl outline-offset-[-1px] inline-flex flex-col transition-all
        ${isFocused ? "outline outline-1 outline-greyscale-400" : "outline outline-1 outline-greyscale-600"}`}>
      {/* 헤딩 */}
      <div className="flex gap-1 text-greyscale-400 self-stretch justify-start">
        <div className="flex gap-1 pb-2.5">
          <AnswerIcon className="w-6 h-6" />
          <h4 className="text-title4">나의 답변</h4>
        </div>
      </div>

      {/* 텍스트 입력 */}
      <textarea
        ref={textareaRef}
        value={memoValue}
        onChange={handleChange}
        onFocus={handleFocus}
        readOnly={hasSavedMemo && !isEditing}
        maxLength={200}
        className="w-full resize-none bg-transparent border-none outline-none text-greyscale-200 placeholder-greyscale-500 focus:placeholder-transparent caret-green-400"
        rows={2}
        placeholder="질문에 대한 생각을 자유롭게 입력해주세요" />

      {/* 글자수 카운터 + 에러 */}
      {isFocused && (isEditing || !hasSavedMemo) && (
        <div className="w-full flex justify-between items-center">
          {errorMessage ? (
            <span className="text-caption text-red-400">{errorMessage}</span>
          ) : <span />} {/* 왼쪽 공간 비워두기 */}
          <div className="text-body1">
            <span className="text-greyscale-100">{memoValue.length}</span>
            <span className="text-greyscale-500">/200</span>
          </div>
        </div>
      )}

      {/* 버튼 영역 */}
      <div className="flex w-full pt-4 gap-2.5">
        {hasSavedMemo ? (
          isEditing ? (
            // 기존 메모 존재, 수정중
            <>
              <Button
                variant="custom"
                size="sm"
                bgColor="bg-greyscale-900"
                borderColor="border-greyscale-900"
                textColor="text-greyscale-100"
                className="w-full"
                onClick={() => {
                  setIsEditing(false),
                  setMemoValue(initialMemo)
                }
                }>
                취소
              </Button>
              <Button
                size="sm"
                className="w-full"
                disabled={memoValue.trim() === "" || memoValue === initialMemo}
                onClick={handleSaveMemo}>
                저장
              </Button>
            </>
          ) : (
            // 기존 메모 존재, 수정중 아님
            <>
              <Button
                variant="custom"
                size="sm"
                bgColor="bg-greyscale-900"
                borderColor="border-greyscale-900"
                textColor="text-greyscale-100"
                className="w-full"
                onClick={() => setIsModalOpen(true)}>
                삭제
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={handleUpdateMemo}>
                수정
              </Button>
              
              {isModalOpen && (
              <Modal
              title="정말 삭제할까요?"
              subtitle="나의 답변이 사라져요"
              confirmText="삭제"
              onCancel={() => setIsModalOpen(false)}
              onConfirm={handleDeleteMemo} />
            )}
            </>
          ) 
        ) : (
          <>
            <Button
              size="sm"
              fullWidth
              disabled={memoValue.trim() === ""}
              onClick={handleSaveMemo}
              >
              저장
          </Button>
          </>
        )}
      </div>
    </div>
  )
}
