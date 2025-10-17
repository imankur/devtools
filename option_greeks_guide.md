# The Complete Guide to Option Greeks
## A Quant Trader's Handbook

---

## Table of Contents
1. [Introduction](#introduction)
2. [Delta (Δ)](#delta-δ)
3. [Gamma (Γ)](#gamma-γ)
4. [Theta (Θ)](#theta-θ)
5. [Vega (ν)](#vega-ν)
6. [Rho (ρ)](#rho-ρ)
7. [Second-Order Greeks](#second-order-greeks)
8. [Greek Interactions](#greek-interactions)
9. [Hidden Secrets & Pro Tips](#hidden-secrets--pro-tips)
10. [Trading Strategies by Greeks](#trading-strategies-by-greeks)
11. [Risk Management](#risk-management)

---

## Introduction

Option Greeks are mathematical measures of sensitivity. They quantify how option prices change with respect to various factors. Understanding Greeks is the difference between gambling and trading professionally.

**Core Philosophy**: Greeks are not static—they are dynamic, interconnected, and context-dependent. Master their relationships, not just their definitions.

---

## Delta (Δ)

### Definition
Delta measures the rate of change in option price per $1 move in the underlying asset.

### Ranges
- **Call Options**: 0 to +1.0
- **Put Options**: 0 to -1.0
- **ATM Options**: ~0.50 (calls) / ~-0.50 (puts)

### What Affects Delta
1. **Moneyness** (primary driver)
   - ITM: Higher absolute delta (approaching ±1.0)
   - ATM: ~±0.50
   - OTM: Lower absolute delta (approaching 0)

2. **Time to Expiration**
   - More time → Smoother delta curve
   - Less time → Steeper delta curve (becomes more binary)

3. **Implied Volatility**
   - Higher IV → Delta moves toward 0.50 (options act more like 50/50 bets)
   - Lower IV → Delta moves toward extremes (0 or 1)

4. **Interest Rates**
   - Minimal effect for equity options
   - Significant for long-dated options

### Delta as Probability
**Critical Insight**: Delta approximates the probability of expiring ITM. A 0.30 delta option has roughly 30% chance of expiring ITM.

**Hidden Truth**: This is only accurate for ATM options. For deep ITM/OTM, delta overstates/understates actual probability due to gamma effects.

### Pro Tips

**Tip #1: Delta Hedging Frequency**
The more frequently you delta hedge, the more you realize gamma P&L. Daily hedging typically optimal for large gamma positions.

**Tip #2: Delta Decay Pattern**
ITM options lose delta as expiration approaches (decay toward 1.0 slows).
OTM options lose delta exponentially in final weeks.

**Tip #3: The 16-Delta Secret**
Professional traders often use 16-delta options for OTM positions because:
- Approximates 1 standard deviation move
- Balances premium cost vs probability
- Sweet spot for risk/reward in many strategies

**Tip #4: Delta-Neutral Isn't Risk-Free**
A delta-neutral position is still exposed to gamma, vega, and theta. You've only eliminated directional risk.

---

## Gamma (Γ)

### Definition
Gamma measures the rate of change in delta per $1 move in the underlying. It's the "acceleration" of your position.

### Ranges
- Always positive for long options (calls and puts)
- Always negative for short options
- Maximum at ATM
- Approaches zero far ITM or OTM

### What Affects Gamma

1. **Moneyness** (dominant factor)
   - ATM: Maximum gamma
   - ITM/OTM: Gamma decreases exponentially

2. **Time to Expiration** (critical)
   - Short DTE: Gamma explodes (especially ATM)
   - Long DTE: Gamma is low and stable

3. **Implied Volatility**
   - Higher IV → Lower gamma (effect spreads out)
   - Lower IV → Higher gamma (effect concentrates)

4. **Price of Underlying**
   - Higher stock price → Lower absolute gamma (percentage effect)

### The Gamma Equation
**Gamma = Vanna × (Stock Move) + Volga × (IV Change)**

This is rarely taught but crucial for understanding multi-dimensional risk.

### Hidden Secrets

**Secret #1: Gamma Scalping Reality**
Theoretical gamma profit = 0.5 × Gamma × (Price Move)²

But in practice:
- Transaction costs eat 20-40% of theoretical profits
- Slippage increases exponentially with position size
- You need move ≥ 1.5× ATM to break even on costs

**Secret #2: Weekend Gamma**
Markets are closed but time passes. On Friday, gamma is effectively 3× as sensitive because:
- 3 days of time decay occurs
- But only 1 day of potential price movement
Result: Avoid short gamma into weekends unless compensated.

**Secret #3: The Gamma Trap**
When selling ATM options at 7 DTE:
- First 3 days: Gamma is manageable
- Day 4-5: Gamma accelerates dangerously
- Final 2 days: Gamma becomes explosive
Most blowups happen day 5-7, not expiration day.

**Secret #4: Gamma Flip**
Market makers must hedge. When aggregate positioning flips from positive to negative gamma:
- Volatility regime changes instantly
- Dealers shift from buying dips/selling rips to opposite
- Often occurs at key strike levels (like SPX round numbers)

### Pro Tips

**Tip #1: Gamma and Volatility Regimes**
- Low vol environment: Gamma profitable (more frequent small moves)
- High vol environment: Gamma dangerous (gaps and sudden moves)

**Tip #2: Optimal Gamma Exposure**
For portfolios <$100K: Keep net gamma between -0.5 to +2.0
For portfolios >$1M: Professional standard is -5 to +10

**Tip #3: Gamma-Delta Relationship**
Peak gamma occurs at 0.50 delta, but the highest gamma/delta ratio occurs at 0.30-0.40 delta—the sweet spot for gamma scalping.

---

## Theta (Θ)

### Definition
Theta measures option price decay per day (time value erosion). Almost always negative for long options.

### Ranges
- Long options: Negative theta (you pay decay)
- Short options: Positive theta (you collect decay)
- Expressed as daily dollar loss/gain

### What Affects Theta

1. **Time to Expiration** (exponential relationship)
   - >90 DTE: Minimal daily theta
   - 30-60 DTE: Linear acceleration
   - <30 DTE: Exponential decay
   - <7 DTE: Extreme decay (especially ATM)

2. **Moneyness**
   - ATM: Maximum theta
   - ITM: Lower theta (mostly intrinsic value)
   - OTM: Moderate theta (all extrinsic, but less $ value)

3. **Implied Volatility**
   - Higher IV → Higher theta (more extrinsic value to decay)
   - Lower IV → Lower theta

4. **Interest Rates**
   - Higher rates → Slightly higher theta

### The Theta Decay Curve
**Critical Reality**: Theta decay is NOT linear.

- Days 90-60: ~10% of total decay
- Days 60-30: ~30% of total decay
- Days 30-0: ~60% of total decay
- Final week: ~30% of total decay

### Hidden Secrets

**Secret #1: Weekend Theta Reality**
Contrary to popular belief, theta does NOT triple over weekends. Empirical studies show:
- Friday theta ≈ 1.2× normal daily theta
- Monday theta ≈ 0.8× normal daily theta
Models overstate weekend decay by ~30%

**Secret #2: The 45 DTE Sweet Spot**
Professional option sellers target 45 DTE because:
- Theta acceleration begins (moved past slow zone)
- Gamma still manageable
- High probability of profit (60-70% for 1 SD options)
- Risk/reward optimal point on theta curve

**Secret #3: Theta-Vega War**
Every long theta position is short vega. The breakeven relationship:
**Theta Gain = Vega Loss × IV Change**

For typical 30-45 DTE ATM option:
- Need IV to stay within ±5% for theta to win
- IV increase >8% typically overwhelms theta gains

**Secret #4: Theta During Earnings**
Theta accelerates 3-5× in the 48 hours before earnings. IV collapse post-earnings often creates immediate 20-40% profit on short positions even if underlying moves unfavorably.

### Pro Tips

**Tip #1: Optimal Theta Harvesting**
Close short options at 50% profit, not expiration. Capture 50% of max profit in 25% of the time, freeing capital for next trade.

**Tip #2: Theta Compounding**
Reinvesting theta profits with weekly or bi-weekly short options creates exponential returns. Target 1-2% per week (52-104% annualized).

**Tip #3: Theta in Spreads**
Vertical spreads don't simply add theta:
- Bull put spread: Higher theta than naked put
- Iron condor: Peak theta at setup, decreases as strikes tested
- Calendar spread: Positive theta only if front month decays faster

**Tip #4: The Theta Cliff**
At 7-10 DTE, ATM theta accelerates exponentially. This is simultaneously:
- Highest profit opportunity
- Highest risk period
- When most adjustment mistakes occur

---

## Vega (ν)

### Definition
Vega measures option price change per 1% change in implied volatility. Not actually a Greek letter (should be "kappa").

### Ranges
- Always positive for long options
- Always negative for short options
- Maximum at ATM
- Increases with time to expiration

### What Affects Vega

1. **Time to Expiration** (linear relationship)
   - Longer DTE → Higher vega
   - Short DTE → Lower vega
   - Relationship is approximately: Vega ∝ √(Time)

2. **Moneyness**
   - ATM: Maximum vega
   - ITM/OTM: Decreasing vega

3. **Current IV Level**
   - Higher IV → Higher vega (in absolute terms)
   - Lower IV → Lower vega

4. **Strike Price**
   - Higher strikes → Lower vega (as percentage)

### The Vega Term Structure
Near-term IV ≠ Long-term IV. Understanding the curve is critical:
- Front month: Most volatile, mean-reverting
- 2-3 months: Moderate volatility
- LEAPS: Most stable, least responsive

### Hidden Secrets

**Secret #1: Vega vs RV (Realized Volatility)**
Most traders focus on IV, but the real edge is the spread:
- When IV > Expected RV: Sell options
- When IV < Expected RV: Buy options

Historical studies show:
- IV typically 3-5% higher than RV (variance risk premium)
- This edge erodes in high vol regimes
- Best predictor: Recent 10-day RV vs current IV

**Secret #2: Vega Convexity**
Vega is not linear with IV changes:
- Low IV (10-20%): Vega changes are ~linear
- High IV (40-60%): Vega accelerates non-linearly
- Extreme IV (>80%): Vega can become unpredictable

**Secret #3: The Vega-Gamma Seesaw**
Short-dated options: High gamma, low vega (price risk)
Long-dated options: Low gamma, high vega (vol risk)

Sweet spot for delta-neutral strategies: 60-90 DTE
- Balanced gamma exposure
- Substantial vega to trade vol mean-reversion

**Secret #4: IV Percentile vs IV Rank**
Professional traders use IV percentile (not rank):
- IV Rank: (Current IV - Min IV) / (Max IV - Min IV)
- IV Percentile: % of time IV was below current level

IV Percentile is more robust for long time series and extreme events.

**Secret #5: Earnings IV Crush Formula**
Predictable earnings IV collapse:
**Post-Earnings IV ≈ Pre-Earnings IV × 0.3 to 0.5**

The exact multiple depends on:
- Historical earnings moves
- Time to next catalyst
- Sector correlation

### Pro Tips

**Tip #1: Buying Vega Efficiently**
Never buy ATM for vega exposure—it's theta-inefficient. Instead:
- Buy 30-delta options (75% of ATM vega, 50% of theta)
- Use calendars to isolate vega
- Buy straddles only in extreme low IV (<10th percentile)

**Tip #2: The VIX Futures Contango Trade**
When VIX futures in contango (usually):
- Short-dated options systematically overpriced
- Continuous selling pressure keeps IV elevated
- Edge: Sell weekly options, buy monthly for ratio hedge

**Tip #3: Sector Vega Correlation**
Technology and financial sectors show highest IV correlation (0.7-0.8).
Energy and utilities lowest (0.3-0.5).
Use for portfolio vega hedging.

**Tip #4: Vega Hedging with VIX Options**
Rough hedge ratios:
- 1 SPX option ≈ 3-5 VIX options (vega-neutral)
But VIX options have massive gamma, making this tricky for precision hedging.

---

## Rho (ρ)

### Definition
Rho measures option price change per 1% change in interest rates.

### Ranges
- Call options: Positive rho
- Put options: Negative rho
- Increases with time to expiration

### What Affects Rho

1. **Time to Expiration** (dominant factor)
   - <90 DTE: Essentially irrelevant
   - 90-365 DTE: Minor consideration
   - >365 DTE (LEAPS): Significant factor

2. **Moneyness**
   - ITM: Higher rho
   - OTM: Lower rho

3. **Interest Rate Environment**
   - Higher rates → Greater rho sensitivity

### Reality Check
**For 99% of option traders, rho is irrelevant.** Unless trading:
- LEAPS (>1 year expiration)
- Deep ITM options carried for months
- Macro interest rate strategies

Focus on delta, gamma, theta, and vega first.

### Hidden Secret

**Secret #1: The Forward Pricing Insight**
Rho exists because options are priced off forward prices, not spot:
**Forward = Spot × e^(r×t)**

When rates rise:
- Call values increase (higher forward price)
- Put values decrease

For dividend-paying stocks, the formula is:
**Forward = Spot × e^((r-q)×t)** where q = dividend yield

This matters for high-dividend stocks and indexes.

---

## Second-Order Greeks

### Vanna (Charm)
Sensitivity of delta to changes in volatility.
**Vanna = ∂Delta/∂IV = ∂Vega/∂Spot**

**Critical Usage**: 
- Highest at 25-delta options
- Explains why delta changes when IV changes
- Essential for managing delta in volatile markets

**Hidden Insight**: When IV spikes, OTM options gain delta faster than Black-Scholes predicts. Vanna explains this.

### Volga (Vomma)
Sensitivity of vega to changes in volatility.
**Volga = ∂Vega/∂IV**

**Critical Usage**:
- Always positive for long options
- Explains convexity in vega exposure
- Critical for volatility arbitrage

**Pro Tip**: Long straddles benefit from volga—vega increases as IV rises, creating convex payoff.

### Charm (Delta Decay)
Sensitivity of delta to passage of time.
**Charm = ∂Delta/∂Time**

**Hidden Secret**: 
- ITM options: Negative charm (delta decays toward 1.0 slowly)
- OTM options: Negative charm (delta decays toward 0 rapidly)
- ATM options: Minimal charm

Explains why OTM option delta collapses in final week.

### Vera (Vega Decay)
Sensitivity of vega to passage of time.
**Vera = ∂Vega/∂Time**

Always negative—vega decreases as time passes (square root relationship).

### Color (Gamma Decay)
Sensitivity of gamma to passage of time.
**Color = ∂Gamma/∂Time**

**Critical Insight**: 
- ATM options: Negative color initially, becomes positive near expiration
- Explains why gamma explodes in final days
- Essential for understanding pin risk

---

## Greek Interactions

### The Delta-Gamma Relationship
**New Delta = Old Delta + (Gamma × Price Change)**

But in reality, gamma itself changes, creating convexity.

### The Theta-Gamma Tradeoff
From Black-Scholes PDE:
**Theta + 0.5 × Sigma² × S² × Gamma = r × Portfolio Value**

**Translation**: Theta decay compensates for gamma risk. You cannot have positive theta without negative gamma (and vice versa) in a delta-neutral position.

### The Vega-Gamma Correlation
Short-dated: Low vega, high gamma → Directional bets
Long-dated: High vega, low gamma → Volatility bets

Transition point: ~30-45 DTE

### Cross-Greek Risk
**Real Portfolio Risk = Δ² + Γ² + ν² + Θ²**

This is oversimplified but illustrates that Greeks compound risk. A position with high delta AND high gamma is riskier than each alone.

---

## Hidden Secrets & Pro Tips

### Secret #1: The Gamma-Theta Sweet Spot
For iron condors and credit spreads, optimal entry is 42-48 DTE:
- Theta/Gamma ratio peaks
- Probability of profit maximized
- Adjustment time adequate
- Capital efficiency optimal

### Secret #2: The Vega Smile
IV is not constant across strikes—it forms a "smile" or "skew":
- OTM puts: Higher IV (crash protection premium)
- ATM: Lower IV
- OTM calls: Moderate IV

**Trading Implication**: 
- Selling OTM puts captures elevated IV
- Put spreads more profitable than call spreads (IV differential)
- The smile steepens in high-vol regimes

### Secret #3: Position Sizing by Greeks
Professional formula:
**Max Position Size = (Portfolio Theta × Days) / (Max Gamma Loss)**

Ensures theta collected exceeds worst-case gamma loss.

### Secret #4: The Greek Correlation Matrix
| | Delta | Gamma | Theta | Vega |
|---|---|---|---|---|
| Delta | 1.0 | 0.0 | 0.0 | 0.0 |
| Gamma | 0.0 | 1.0 | -0.9 | -0.6 |
| Theta | 0.0 | -0.9 | 1.0 | 0.5 |
| Vega | 0.0 | -0.6 | 0.5 | 1.0 |

**Insight**: You cannot maximize both gamma and theta. Pick one.

### Secret #5: The Weekend Effect
Empirical studies show:
- Friday closing options 2-3% cheaper than Monday equivalent
- Saturday/Sunday time decay priced as ~1.5 days (not 2)
- Consider buying Friday, selling Monday for pure theta scalp

### Secret #6: The Pin Risk Formula
Probability of pinning at strike:
**P(pin) ≈ (Open Interest at Strike) / (Total Volume)**

When probability >20%, expect violent gamma activity near expiration.

### Secret #7: Early Assignment Calculation
Calls assigned early when:
**Intrinsic Value > Time Value + (Dividend × Days to Ex-Div / 365)**

Track dividend dates religiously on ITM short calls.

---

## Trading Strategies by Greeks

### High Positive Delta
**Strategies**: Long calls, short puts, long stock + short puts
**When**: Strong bullish conviction, low volatility
**Risk**: Directional, theta decay

### Negative Delta
**Strategies**: Long puts, short calls, ratio spreads
**When**: Bearish conviction, hedging long equity
**Risk**: Unlimited on short calls, theta decay on long puts

### Long Gamma
**Strategies**: Long straddles, strangles, backspreads
**When**: Expecting large move, direction uncertain, IV low
**Risk**: Negative theta, vega exposure
**Ideal**: 30-60 DTE, IV <25th percentile

### Short Gamma
**Strategies**: Iron condors, butterflies, short straddles
**When**: Range-bound expectation, high IV
**Risk**: Explosive losses, pin risk near expiration
**Ideal**: 45 DTE, IV >60th percentile

### Positive Theta
**Strategies**: Credit spreads, iron condors, covered calls
**When**: Consolidating markets, high IV, decay needed
**Risk**: Negative gamma, assignment risk
**Management**: Close at 50% profit, roll at 21 DTE

### Negative Theta
**Strategies**: Debit spreads, long options
**When**: Strong directional view, catalysts ahead
**Risk**: Time decay accelerates, expensive
**Management**: Use spreads to reduce cost, avoid last 14 days

### Long Vega
**Strategies**: Long straddles, calendars, ratio backspreads
**When**: IV low (<20th percentile), expecting vol expansion
**Risk**: Theta drag, vega can stay low longer than you can stay solvent
**Ideal**: 60-90 DTE, ahead of known events

### Short Vega
**Strategies**: Short strangles, iron condors, ratio spreads
**When**: IV high (>70th percentile), post-earnings, macro clarity
**Risk**: Vega explosion, black swans
**Management**: Size conservatively, hedge with long-dated options

---

## Risk Management

### The 10 Commandments of Greek Management

1. **Never Be Short Gamma Into Events**
   Earnings, Fed meetings, geopolitical events—always flatten or flip long.

2. **Theta Justifies Gamma Risk**
   If daily theta doesn't exceed 2× your gamma risk, position is mispriced.

3. **Monitor Portfolio Greeks, Not Position Greeks**
   Individual positions may look balanced, but portfolio can be dangerously skewed.

4. **Delta-Hedge at Predetermined Levels**
   Set rules (e.g., re-hedge at ±20% delta change) and follow them.

5. **Vega Exposure Should Scale Inversely With IV**
   High IV → Reduce vega exposure
   Low IV → Increase vega exposure (carefully)

6. **Gamma Exposure Increases Quadratically With Time**
   A position manageable at 21 DTE becomes dangerous at 7 DTE.

7. **Close Winners Early**
   80% of max profit in 20% of time is standard for theta strategies.

8. **Cut Losers Fast**
   If down 2× collected premium, exit. Don't marry positions.

9. **Size by Kelly Criterion (Modified)**
   **Position Size = Edge / (4 × Variance)**
   Professional standard: Use 1/4 Kelly for options.

10. **Hedge Greeks, Not P&L**
    Focus on neutralizing risk exposures, not chasing losses.

### Greek Monitoring Tools

**Daily Checklist**:
- Portfolio delta (target: -10 to +10 for neutral strategies)
- Net theta (ensure positive if running premium collection)
- Gamma exposure (reduce if >30 DTE becomes <15 DTE)
- Vega exposure (check IV percentile)
- Max loss scenarios (2 SD moves up/down)

**Weekly Checklist**:
- Correlation matrix of holdings
- Sector concentration
- Event calendar (earnings, dividends, Fed)
- Adjustment needs for positions <21 DTE

**Monthly Checklist**:
- Greek P&L attribution
- Strategy performance review
- Volatility regime assessment
- Capital allocation adjustment

---

## Advanced Greek Truths

### Truth #1: Greeks Are Model-Dependent
Black-Scholes assumes:
- Constant volatility (false)
- Log-normal returns (false—fat tails exist)
- No transaction costs (false)

Result: Greeks are approximations. Real markets have jumps, skew, and liquidity constraints.

### Truth #2: Order Flow Affects Greeks
Market maker hedging creates feedback loops:
- Heavy call buying → Dealers short calls → Buy stock to hedge → Stock rises
- Heavy put buying → Dealers short puts → Sell stock to hedge → Stock falls

### Truth #3: Greek Ratios Matter More Than Absolutes
**Theta/Gamma Ratio**: Higher is better for premium sellers
**Vega/Theta Ratio**: Lower is better for stable strategies
**Delta/Gamma Ratio**: Indicates leverage and risk

### Truth #4: Greeks Predict Behavior, Not Outcomes
A 0.70 delta call doesn't mean 70% profit chance—it means approximate hedge ratio and sensitivity.

### Truth #5: The Greeks Lie Near Expiration
Final 48 hours: Black-Scholes breaks down
- Gamma goes infinite ATM
- Theta becomes discontinuous
- Vega approaches zero

Models fail, intuition and experience matter most.

---

## Conclusion

Mastering Greeks requires:
1. **Conceptual Understanding**: Know what each Greek measures
2. **Interrelationships**: Greeks don't exist in isolation
3. **Practical Application**: Theory means nothing without execution
4. **Risk Management**: Greeks are tools to quantify and manage risk
5. **Continuous Learning**: Markets evolve, volatility regimes change

**Final Wisdom**: 
The best option traders don't fight Greeks—they dance with them. Know when to be long gamma (uncertain, volatile), short gamma (stable, range-bound), or flat (uncertain about uncertainty).

Greeks are your map. Price action is your territory. Learn to read both.

---

**Document Version**: 1.0  
**Last Updated**: October 2025  
**For**: Personal Reference and Education  

*Remember: Knowledge of Greeks is necessary but insufficient. Discipline, risk management, and emotional control are equally critical for long-term success.*