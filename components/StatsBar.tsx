import { Building2, Home, Star, MapPin } from "lucide-react";

const STATS = [
  {
    icon: Building2,
    value: "+30 milhões",
    label: "em obras",
  },
  {
    icon: Home,
    value: "200+",
    label: "projetos realizados",
  },
  {
    icon: Star,
    value: "+ de 10 Anos de",
    label: "experiência",
  },
  {
    icon: MapPin,
    value: "São José do Rio Preto",
    label: "e região",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-wine-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4 lg:gap-6 lg:px-10">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon className="shrink-0 text-gold" size={30} strokeWidth={1.5} />
            <div className="leading-tight">
              <p className="font-display text-lg text-white">{value}</p>
              <p className="text-xs text-white/70">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
