import { CheckCircle2, DollarSign, Gift, HelpCircle, ListChecks, ShieldCheck, Sparkles, UserCheck } from 'lucide-react'

export interface InvestmentPhaseRow {
  phase: string
  whatYouLearn?: string
  fee?: string
  duration?: string
  monthlyFee?: string
  totalFee?: string
  note?: string
}

export interface InvestmentPaymentOption {
  option: string
  totalInvestment: string
  paymentTiming: string
  flexibility: string
  savings: string
}

export function InvestmentTable({
  intro,
  phases,
  totalFee,
  bundleFee,
  bundleDiscountText,
  notes,
  columns = 'detailed',
  paymentOptions,
  whatIsIncluded,
  howToEnroll,
}: {
  intro: string
  phases: InvestmentPhaseRow[]
  totalFee: string
  bundleFee?: string
  bundleDiscountText?: string
  notes?: string[]
  columns?: 'simple' | 'detailed'
  paymentOptions?: InvestmentPaymentOption[]
  whatIsIncluded?: string[]
  howToEnroll?: Array<{ step: string; text: string }>
}) {
  const hasWhatYouLearn = phases.some((p) => Boolean(p.whatYouLearn))

  return (
    <div className="space-y-10">
      <p className="text-base leading-relaxed text-muted-foreground">{intro}</p>

      {/* Main Fee Table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="py-3.5 pl-6 pr-4 font-semibold">Phase</th>
                {hasWhatYouLearn && (
                  <th className="py-3.5 px-4 font-semibold">What You Learn</th>
                )}
                <th className="py-3.5 px-4 font-semibold">Duration</th>
                <th className="py-3.5 px-4 font-semibold">Monthly Rate</th>
                <th className="py-3.5 pl-4 pr-6 text-right font-semibold">Phase Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-xs">
              {phases.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-muted/20">
                  <td className="py-4 pl-6 pr-4 font-semibold text-foreground whitespace-nowrap">
                    {row.phase}
                  </td>
                  {hasWhatYouLearn && (
                    <td className="py-4 px-4 font-sans font-medium text-foreground">
                      {row.whatYouLearn || '—'}
                    </td>
                  )}
                  <td className="py-4 px-4 text-muted-foreground whitespace-nowrap">
                    {row.duration || '—'}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground whitespace-nowrap">
                    {row.monthlyFee || '—'}
                  </td>
                  <td className="py-4 pl-4 pr-6 text-right font-bold text-foreground whitespace-nowrap">
                    {row.fee || row.totalFee}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-border bg-muted/40 font-mono text-xs">
                <td
                  colSpan={hasWhatYouLearn ? 4 : 3}
                  className="py-4 pl-6 pr-4 font-bold uppercase tracking-wider text-foreground"
                >
                  Phase-by-Phase Total
                </td>
                <td className="py-4 pl-4 pr-6 text-right font-bold text-foreground sm:text-sm whitespace-nowrap">
                  {totalFee}
                </td>
              </tr>
              {bundleFee && (
                <tr className="border-t border-brand/20 bg-brand/10 font-mono text-xs">
                  <td
                    colSpan={hasWhatYouLearn ? 4 : 3}
                    className="py-4 pl-6 pr-4 font-bold uppercase tracking-wider text-brand"
                  >
                    ⭐ Full Program Bundle (10% Discount)
                  </td>
                  <td className="py-4 pl-4 pr-6 text-right font-bold text-brand sm:text-base whitespace-nowrap">
                    {bundleFee}
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bundle Discount Highlight Card */}
      {bundleDiscountText && (
        <div className="rounded-xl border border-brand/40 bg-gradient-to-r from-brand/15 via-brand/10 to-transparent p-5">
          <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" /> Full Program Bundle Offer
          </div>
          <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
            {bundleDiscountText}
          </p>
        </div>
      )}

      {/* Payment Options Table (if provided) */}
      {paymentOptions && paymentOptions.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
            Choosing Your Payment Option
          </h3>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="py-3.5 pl-6 pr-4 font-semibold">Payment Option</th>
                    <th className="py-3.5 px-4 font-semibold">Total Investment</th>
                    <th className="py-3.5 px-4 font-semibold">Payment Timing</th>
                    <th className="py-3.5 px-4 font-semibold">Flexibility</th>
                    <th className="py-3.5 pl-4 pr-6 text-right font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-mono text-xs">
                  {paymentOptions.map((opt, idx) => (
                    <tr
                      key={idx}
                      className={
                        opt.option.includes('Bundle')
                          ? 'bg-brand/5 transition-colors hover:bg-brand/10'
                          : 'transition-colors hover:bg-muted/20'
                      }
                    >
                      <td className="py-4 pl-6 pr-4 font-sans font-bold text-foreground">
                        {opt.option}
                      </td>
                      <td className="py-4 px-4 font-bold text-foreground whitespace-nowrap">
                        {opt.totalInvestment}
                      </td>
                      <td className="py-4 px-4 text-muted-foreground whitespace-nowrap">
                        {opt.paymentTiming}
                      </td>
                      <td className="py-4 px-4 text-muted-foreground whitespace-nowrap">
                        {opt.flexibility}
                      </td>
                      <td className="py-4 pl-4 pr-6 text-right font-bold text-brand whitespace-nowrap">
                        {opt.savings}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* What's Included in Every Phase */}
      {whatIsIncluded && whatIsIncluded.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-4">
          <h3 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-foreground">
            <ListChecks className="h-4 w-4 text-brand" /> What&apos;s Included in Every Phase
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 pt-2">
            {whatIsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-background/60 p-3 text-xs sm:text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-foreground/90 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How to Enroll */}
      {howToEnroll && howToEnroll.length > 0 && (
        <div className="rounded-xl border border-brand/30 bg-card p-6 sm:p-8 space-y-4">
          <h3 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-brand">
            <UserCheck className="h-4 w-4" /> How to Enroll
          </h3>
          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            {howToEnroll.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-lg border border-border bg-background p-4 space-y-2"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
                  {item.step}
                </span>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      {notes && notes.length > 0 && (
        <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-2">
          <span className="block font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Important Pricing Notes:
          </span>
          <ul className="space-y-1.5 font-mono text-xs text-muted-foreground">
            {notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand shrink-0">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
