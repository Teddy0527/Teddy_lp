"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "スタンダードプラン",
      price: "要お問い合わせ",
      description: "基本的なAIチャットボット導入に最適なプラン",
      features: [
        "カスタムAIチャットボット開発",
        "基本的なナレッジベース構築",
        "管理画面の提供",
        "初期設定サポート",
        "3ヶ月間の保守サポート",
      ],
    },
    {
      name: "プレミアムプラン",
      price: "要お問い合わせ",
      description: "高度なAI機能と連携が必要な企業向け",
      features: [
        "高度なAIチャットボット開発",
        "大規模ナレッジベース構築",
        "既存システム連携",
        "カスタム管理画面開発",
        "1年間の保守サポート",
        "月次パフォーマンスレポート",
      ],
    },
    {
      name: "エンタープライズプラン",
      price: "要お問い合わせ",
      description: "大規模導入と複雑な要件に対応",
      features: [
        "複数AIチャットボット開発",
        "複雑なワークフロー自動化",
        "複数システム連携",
        "専用サポート担当者",
        "無制限の保守サポート",
        "四半期ごとの改善提案",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-[#fff9f2]" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#5e3b22]">料金プラン</h2>
          <p className="text-[#8b5d3b] max-w-3xl mx-auto">お客様のニーズに合わせた柔軟な料金プランをご用意しています</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} className="flex justify-center">
              <Card className="h-full flex flex-col border-[#e6c9a8] bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
                <CardHeader>
                  <CardTitle className="text-[#5e3b22]">{plan.name}</CardTitle>
                  <div className="mt-4 text-4xl font-bold text-[#8b5d3b]">{plan.price}</div>
                  <CardDescription className="mt-2 text-[#a67c52]">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span className="text-[#8b5d3b]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-[#5e3b22]" asChild>
                    <Link href="/#contact">お問い合わせ</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

