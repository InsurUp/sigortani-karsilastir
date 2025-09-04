import CampaingDetailLayout from "@/components/pages/campaing/CampaingDetailLayout";
import { campaigns } from "@/data";
import { notFound } from "next/navigation";
import React from "react";

export default async function CampaingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // href yapına göre eşleştirmeyi istersen netleştir:
  // const campaign = campaigns.find(c => c.href === `/campaign/${slug}`);
  const campaign = campaigns.find((c) => c.href.includes(`/${slug}`));

  if (!campaign) {
    notFound();
  }

  return <CampaingDetailLayout campaign={campaign} />;
}
