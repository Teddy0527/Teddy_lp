"use client"

import { motion } from "framer-motion"
import { Bot, Database, Zap, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServiceSection() {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "カスタムチャットボット開発",
      description:
        "企業のニーズに合わせたAIチャットボットを開発。顧客サポート、社内Q&A、営業支援など様々な用途に対応します。",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "ナレッジベース構築",
      description:
        "社内ドキュメントやFAQをAIが理解できる形に変換。膨大な情報を効率的に活用できるシステムを構築します。",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "既存システム連携",
      description: "CRMやERPなど既存のシステムとAIを連携。データを活用した高度な自動化と意思決定支援を実現します。",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "保守・運用サポート",
      description:
        "導入後の継続的な改善と保守。AIの精度向上、新機能追加、セキュリティ対策などを包括的にサポートします。",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-[#fff9f2]" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#5e3b22]">サービス内容</h2>
          <p className="text-[#8b5d3b] max-w-3xl mx-auto">
            企業のニーズに合わせたカスタムAIチャットボット・LLMソリューションの開発・導入支援を提供します
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="flex justify-center">
              <Card className="h-full border-[#e6c9a8] bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-[#5e3b22]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#8b5d3b]">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

