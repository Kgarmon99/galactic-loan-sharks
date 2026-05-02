export interface Avatar {
  id: string;
  name: string;
  imageUrl: string;
  color: string;
  bgClass: string;
  borderClass: string;
  glowClass: string;
  description: string;
}

export const avatars: Avatar[] = [
  {
    id: 'nova',
    name: 'Nova',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=nova-captain&backgroundColor=0e7490&eyes=roundFrame01&mouth=smile01',
    color: 'text-cyan-400',
    bgClass: 'bg-cyan-500/20',
    borderClass: 'border-cyan-500/50',
    glowClass: 'bg-cyan-500/30',
    description: 'Starship Captain'
  },
  {
    id: 'zyx',
    name: 'Zyx-9',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=zyx9-broker&backgroundColor=7e22ce&eyes=eva&mouth=bite',
    color: 'text-purple-400',
    bgClass: 'bg-purple-500/20',
    borderClass: 'border-purple-500/50',
    glowClass: 'bg-purple-500/30',
    description: 'Alien Banker'
  },
  {
    id: 'orion',
    name: 'Orion',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=orion-star&backgroundColor=854d0e&eyes=glow&mouth=diagram',
    color: 'text-yellow-400',
    bgClass: 'bg-yellow-500/20',
    borderClass: 'border-yellow-500/50',
    glowClass: 'bg-yellow-500/30',
    description: 'Star Trader'
  },
  {
    id: 'nebula',
    name: 'Nebula',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=nebula-cosmic&backgroundColor=9d174d&eyes=bulging&mouth=smile02',
    color: 'text-pink-400',
    bgClass: 'bg-pink-500/20',
    borderClass: 'border-pink-500/50',
    glowClass: 'bg-pink-500/30',
    description: 'Cosmic Oracle'
  },
  {
    id: 'vortex',
    name: 'Vortex',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=vortex-analyst&backgroundColor=1e3a8a&eyes=squint&mouth=tongue',
    color: 'text-blue-400',
    bgClass: 'bg-blue-500/20',
    borderClass: 'border-blue-500/50',
    glowClass: 'bg-blue-500/30',
    description: 'Space Analyst'
  },
  {
    id: 'titan',
    name: 'Titan',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=titan-robot&backgroundColor=1e293b&eyes=roundFrame02&mouth=square01',
    color: 'text-slate-400',
    bgClass: 'bg-slate-500/20',
    borderClass: 'border-slate-500/50',
    glowClass: 'bg-slate-500/30',
    description: 'Robot Banker'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=aurora-light&backgroundColor=065f46&eyes=sensors&mouth=smile01',
    color: 'text-emerald-400',
    bgClass: 'bg-emerald-500/20',
    borderClass: 'border-emerald-500/50',
    glowClass: 'bg-emerald-500/30',
    description: 'Light Weaver'
  },
  {
    id: 'cosmos',
    name: 'Cosmos',
    imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=cosmos-broker&backgroundColor=9a3412&eyes=glow&mouth=diagram',
    color: 'text-orange-400',
    bgClass: 'bg-orange-500/20',
    borderClass: 'border-orange-500/50',
    glowClass: 'bg-orange-500/30',
    description: 'Planet Broker'
  }
];

export const getAvatarById = (id: string): Avatar => {
  return avatars.find(a => a.id === id) || avatars[0];
};
