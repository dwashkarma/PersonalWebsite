import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { fullname, email, message } = await req.json();

  //validate the date
  if (!fullname || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  //send message to telegram
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const telegramMessage = `🔔 New Contact Form Message

👤 Name: ${fullname}
📧 Email: ${email}
💬 Message: ${message}

Sent at: ${new Date().toLocaleString()}`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return NextResponse.json(
      { error: "Failed to send message to Telegram" },
      { status: 500 }
    );
  }
};
