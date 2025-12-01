import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  
  if (req.method === 'POST') {
    
    // 환경 변수에서 이메일 정보 가져오기
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_KEY;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      secure: false, // true for 465, false for other ports
       auth: {
        user,
        pass
      },
       
       //추가
      tls: {
       rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: user,
      replyTo:body.email,
      to: user,
      subject: `안녕하세요. ${body.name}입니다.`,
      html: `
      <h2>보내는이: ${body.name}</h2>
      <b>내용: ${body.content}</b>
      `, // 또는 html: '<b>Hello world?</b>'
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: '이메일이 성공적으로 전송되었습니다.' },{status:200});
    } catch (error) {
      console.error('이메일 전송 중 오류 발생:', error);
      return NextResponse.json({ message: '이메일 전송에 실패했습니다.' },{status:500});
    }
  } 
 
}
