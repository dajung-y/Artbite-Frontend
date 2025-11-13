import z from "zod";

export const signupSchema = z.object({
  email: z.string().min(1, "이메일을 입력하세요").email("이메일 형식이 올바르지 않습니다"),
  password: z.string().min(8, "비밀번호를 입력하세요"),
  username: z.string().min(2, "사용자 이름을 입력하세요"),
});