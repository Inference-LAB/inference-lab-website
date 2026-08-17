export function InvestmentTable({
  intro,
  phases,
  totalFee,
  bundleFee,
  bundleDiscountText,
  notes,
  columns = 'simple', // 'simple' for AI Builder, 'detailed' for Applied AI
}: {
  intro: string
  phases: Array<{
    phase: string
    fee?: string
    duration?: string
    monthlyFee?: string
    totalFee?: string
  }>
  totalFee: string
  bundleFee?: string
  bundleDiscountText?: string
  notes?: string[]
  columns?: 'simple' | 'detailed'
}) {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-3.5 pl-6 pr-4 font-semibold">Phase</th>
                {columns === 'detailed' && (
                  <>
                    <th className="py-3.5 px-4 font-semibold">Duration</th>
                    <th className="py-3.5 px-4 font-semibold">Monthly Fee</th>
                  </>
                )}
                <th className="py-3.5 pl-4 pr-6 text-right font-semibold">
                  {columns === 'detailed' ? 'Phase Total' : 'Investment'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-xs">
              {phases.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-muted/20">
                  <td className="py-3.5 pl-6 pr-4 font-sans font-medium text-foreground">
                    {row.phase}
                  </td>
                  {columns === 'detailed' && (
                    <>
                      <td className="py-3.5 px-4 text-muted-foreground whitespace-nowrap">
                        {row.duration}
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground whitespace-nowrap">
                        {row.monthlyFee}
                      </td>
                    </>
                  )}
                  <td className="py-3.5 pl-4 pr-6 text-right font-bold text-foreground whitespace-nowrap">
                    {row.fee || row.totalFee}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-border bg-muted/40 font-mono text-xs">
                <td
                  colSpan={columns === 'detailed' ? 3 : 1}
                  className="py-4 pl-6 pr-4 font-bold uppercase tracking-wider text-foreground"
                >
                  Phase-by-Phase Total
                </td>
                <td className="py-4 pl-4 pr-6 text-right font-bold text-foreground sm:text-sm">
                  {totalFee}
                </td>
              </tr>
              {bundleFee && (
                <tr className="border-t border-border bg-brand/5 font-mono text-xs">
                  <td
                    colSpan={columns === 'detailed' ? 3 : 1}
                    className="py-4 pl-6 pr-4 font-bold uppercase tracking-wider text-brand"
                  >
                    Full Program Bundle (10% Discount)
                  </td>
                  <td className="py-4 pl-4 pr-6 text-right font-bold text-brand sm:text-sm">
                    {bundleFee}
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </div>

      {bundleDiscountText && (
        <div className="rounded-lg border border-brand/30 bg-brand/5 p-4 font-mono text-xs text-brand">
          ✓ {bundleDiscountText}
        </div>
      )}

      {notes && notes.length > 0 && (
        <ul className="space-y-1 font-mono text-xs text-muted-foreground">
          {notes.map((note, idx) => (
            <li key={idx}>• {note}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
