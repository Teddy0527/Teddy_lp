"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ElegantShape } from "@/components/ui/elegant-shape"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#2b1d13]"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5e3b22]/30 via-transparent to-[#c68f56]/20 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#c68f56]/30"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#8b5d3b]/30"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#d9b38c]/30"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#e6c9a8]/30"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#f0d9bf]/30"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex justify-center">
        <div className="max-w-4xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5d3b]/20 border border-[#d9b38c]/30 mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-[#c68f56]" />
            <span className="text-sm text-[#e6c9a8] tracking-wide">LLM受託開発サービス</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#f0d9bf] to-[#d9b38c]">
                あなたに寄り添うAIを、
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-[#c68f56] via-[#e6c9a8] to-[#8b5d3b]",
                )}
              >
                あなたのビジネスに
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-[#e6c9a8]/80 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              ビジネスに最適化されたAIチャットボットで業務効率化・顧客満足度向上を実現します
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="bg-[#8b5d3b] hover:bg-[#5e3b22] text-white">
              <Link href="/#contact">無料相談を予約する</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[#c68f56] text-[#c68f56] hover:bg-[#c68f56]/10"
            >
              <Link href="/#services">サービスを見る</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1d13] via-transparent to-[#2b1d13]/80 pointer-events-none" />
    </div>
  )
}

