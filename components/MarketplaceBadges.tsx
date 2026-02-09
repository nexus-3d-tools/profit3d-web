export default function MarketplaceBadges() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Active Marketplaces */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Mercado Livre Badge */}
        <div className="flex items-center gap-2 px-5 py-3 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
          <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center font-bold text-white text-sm">
            ML
          </div>
          <span className="font-medium text-gray-800">Mercado Livre</span>
        </div>

        {/* Shopee Badge */}
        <div className="flex items-center gap-2 px-5 py-3 bg-orange-50 border border-orange-200 rounded-lg shadow-sm">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold text-white text-sm">
            S
          </div>
          <span className="font-medium text-gray-800">Shopee</span>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="text-sm text-gray-500">
        <span className="font-medium">Em breve:</span> Amazon • Magalu • TikTok Shop
      </div>
    </div>
  );
}
