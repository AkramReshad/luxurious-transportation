import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { services } from "@/lib/site-data";

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) return {}; return { title: `${service.name} | Las Vegas Transportation`, description: service.summary, alternates: { canonical: `/${service.slug}/` }, openGraph: { title: service.name, description: service.summary, images: [service.image] } }; }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) notFound(); return <ServiceDetail service={service} />; }
