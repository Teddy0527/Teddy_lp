"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "お問い合わせを受け付けました",
        description: "担当者より2営業日以内にご連絡いたします。",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section className="py-20 bg-[#f5e9d9]" id="contact">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#5e3b22]">お問い合わせ</h2>
          <p className="text-[#8b5d3b] max-w-3xl mx-auto">
            AIチャットボット導入についてのご相談やお見積りのご依頼はこちらからお気軽にお問い合わせください
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex justify-center"
        >
          <Card className="border-[#e6c9a8] bg-white shadow-md w-full max-w-3xl">
            <CardHeader>
              <CardTitle className="text-[#5e3b22]">無料相談予約</CardTitle>
              <CardDescription className="text-[#a67c52]">
                ビジネスに最適なAIソリューションについて専門家がご提案します
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#5e3b22]">
                      会社名
                    </Label>
                    <Input
                      id="company"
                      placeholder="株式会社Teddy"
                      required
                      className="border-[#d9b38c] focus-visible:ring-[#8b5d3b]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#5e3b22]">
                      お名前
                    </Label>
                    <Input
                      id="name"
                      placeholder="山田 太郎"
                      required
                      className="border-[#d9b38c] focus-visible:ring-[#8b5d3b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#5e3b22]">
                      メールアドレス
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@teddy.jp"
                      required
                      className="border-[#d9b38c] focus-visible:ring-[#8b5d3b]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#5e3b22]">
                      電話番号
                    </Label>
                    <Input
                      id="phone"
                      placeholder="03-1234-5678"
                      className="border-[#d9b38c] focus-visible:ring-[#8b5d3b]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-[#5e3b22]">
                    ご興味のあるサービス
                  </Label>
                  <Select>
                    <SelectTrigger className="border-[#d9b38c] focus-visible:ring-[#8b5d3b]">
                      <SelectValue placeholder="サービスを選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chatbot">カスタムチャットボット開発</SelectItem>
                      <SelectItem value="knowledge">ナレッジベース構築</SelectItem>
                      <SelectItem value="integration">既存システム連携</SelectItem>
                      <SelectItem value="support">保守・運用サポート</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#5e3b22]">
                    お問い合わせ内容
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="ご質問やご要望をお書きください"
                    rows={5}
                    required
                    className="border-[#d9b38c] focus-visible:ring-[#8b5d3b]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-[#5e3b22]" disabled={isSubmitting}>
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

