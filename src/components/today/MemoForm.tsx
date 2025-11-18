import React, { useEffect, useRef, useState } from "react"

import Button from "../common/Button";
import Modal from "../common/Modal";
import { ReactComponent as AnswerIcon } from "@/assets/icons/icon-answer.svg";
import { answerApi } from "../../api/answerApi";

interface MemoFormProps {
  questionId: number;
  initialMemo?: string;
}

export default function MemoForm({ questionId, initialMemo = "" }: MemoFormProps) {

  const [memoValue, setMemoValue] = useState<string>(initialMemo);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const hasSavedMemo = initialMemo.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoValue(e.target.value);
  }

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

  // 메모 저장, 수정, 삭제 핸들러
  const handleSaveMemo = async () => {
    console.log('메모 작성, 수정');

    // 수정없을 시 api 호출 안함
    if (memoValue.trim() === "" || memoValue === initialMemo) return;

    try{
      if(!initialMemo){
        // 새 메모 작성 : POST
        await answerApi.postAnswer(questionId, {answerText: memoValue});
        console.log("POST 성공");
      } else{
        // 메모 수정 : PUT
        await answerApi.putAnswer(questionId, {answerText: memoValue});
        console.log("PUT 성공");
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
      console.log("DELETE 성공");
      setMemoValue("");
      setIsEditing(false);
      setIsModalOpen(false);
    } catch(err){
      console.error("메모삭제 오류", err);
    }
  };

  return (
    <div 
      className={`p-4 w-full bg-greyscale-900 rounded-xl outline outline-1 outline-offset-[-1px] inline-flex flex-col transition-all
        ${isFocused ? "outline-greyscale-400" : "outline-greyscale-600"}`}>
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
        className="w-full resize-none bg-transparent border-none outline-none text-greyscale-200 placeholder-greyscale-500 caret-green-400"
        rows={2}
        maxLength={200}
        placeholder="질문에 대한 생각을 자유롭게 입력해주세요" />

      {/* 글자수 카운터 : 메모 작성, 수정 */}
      {(!hasSavedMemo || isEditing) && (
        <div className="w-full flex justify-end items-center">
          <span className="text-greyscale-100">{memoValue.length}</span>
          <span className="text-greyscale-500">/200</span>
        </div>
      )}

      {/* 버튼 영역 */}
      <div className="flex w-full pt-4 gap-2.5">
        {hasSavedMemo && !isEditing ? (
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
        ) : (
          <Button
            fullWidth
            disabled={memoValue.trim() === "" || memoValue === initialMemo}
            onClick={handleSaveMemo}
            >
              저장
          </Button>
        )}
      </div>
    </div>
  )
}
