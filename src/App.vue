<template>
  <div class="chat-demo">
    <h2>AI Chat Demo</h2>
    <div
      v-for="(msg, i) in messages"
      :key="i"
      class="msg"
      v-html="renderMarkdown(`${msg.role}: ${msg.content}`)"
    />

    <input
      v-model="input"
      @keyup.enter="send"
      placeholder="Type a message..."
      class="chat-input"
    />
    <button @click="send">Send</button>
  </div>
</template>

<script setup lang="ts">
import { marked } from "marked";
import { ref } from "vue";


type Message = {
  role: "user" | "assistant";
  content: string;
};

const input = ref<string>("");
const messages = ref<Message[]>([]);

function renderMarkdown(text: string): string {
  return marked.parse(text) as string;
}

async function send(): Promise<void> {
  if (!input.value.trim()) return;

  // add user message
  messages.value.push({ role: "user", content: input.value });

  const res = await fetch("/.netlify/functions/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input.value }),
  });

  const data = await res.json();
  // for gemini
  const reply: string = data.reply ?? "[No reply]";

  //for gpt
  // const reply: string =
  //   data.choices?.[0]?.message?.content ?? "[No reply]";

  // add assistant reply
  messages.value.push({ role: "assistant", content: reply });

  input.value = "";
}
</script>

<style>
.chat-demo {
  max-width: 500px;
  margin: 0 auto;
  font-family: sans-serif;
}
.msg {
  margin: 0.5em 0;
}
.chat-input {
  width: 70%;
  padding: 0.5em;
}
</style>
