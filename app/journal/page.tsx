import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogPost from '@/components/BlogPost'
import TriangleIcon from '@/components/TriangleIcon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal | Resonance',
  description: 'Why I wrote Resonance - Where narratives end, Resonance begins.',
  keywords: 'Resonance, journal, blog, sci-fi, novel, literature',
  authors: [{ name: 'S.C. Yue' }],
  openGraph: {
    title: 'Why I wrote Resonance | Resonance',
    description: 'Where narratives end, Resonance begins.',
    url: 'https://resonantia.world/journal',
    siteName: 'Resonance',
    images: [
      {
        url: 'https://resonantia.world/resonance-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Why I wrote Resonance',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'article',
    authors: ['S.C. Yue'],
    publishedTime: '2026-01-01T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why I wrote Resonance | Resonance',
    description: 'Where narratives end, Resonance begins.',
    images: ['https://resonantia.world/resonance-cover.jpg'],
  },
  alternates: {
    canonical: 'https://resonantia.world/journal',
  },
  other: {
    'og:image:secure_url': 'https://resonantia.world/resonance-cover.jpg',
    'og:image:url': 'https://resonantia.world/resonance-cover.jpg',
  },
}

export default function JournalPage() {
  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <Navigation />
      
      <main className="flex-1 pt-24 md:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-16">
            {/* Journal Title */}
            <div className="flex items-center gap-3 mb-4">
              <TriangleIcon size={16} className="text-white/40" />
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase font-mono">
                Journal
              </h2>
            </div>
            <div className="h-px bg-gradient-to-r from-white/30 via-white/20 to-transparent w-32"></div>
            <p className="text-white/40 font-mono text-xs mt-4">[blog posts]</p>
          </header>

          {/* Blog Posts */}
          <div className="space-y-16">
            <BlogPost
              coverImage="/resonance-cover.jpg"
              title="Why I wrote Resonance"
              subtitle="Where narratives end, Resonance begins."
              author="S.C. Yue"
              date="Jan 01, 2026"
              content={`
As 2025 comes to an end, I find myself emerging from a long stretch of fatigue. It was shaped by ongoing conflicts, unresolved relationships, excessive responsibility, and the lingering sense of failure. But looking back, there is one thing I can say with quiet certainty: over the course of this year, I finally worked out the shape of the sci-fi novel I am about to write—Resonance.

It was not a year of completion in the usual sense. What took form was a structure, a logic, a way of holding experience. That, in itself, feels like enough.

I wrote Resonance at a moment when I could no longer ignore a persistent imbalance. It was something subtle yet constant, moving through systems, cities, connections, and my own inner life. It did not announce itself as crisis or collapse. Instead, it felt like a low, continuous vibration—enough to make standing still increasingly difficult.

For a long time, my thoughts kept circling back to the Millennium Bridge connecting St Paul's Cathedral and Tate Modern in London.

The bridge itself was structurally sound. Its failure had nothing to do with flawed engineering. The instability emerged only after people began to cross it. Each person made small, unconscious adjustments to maintain balance. Those adjustments synchronized. Gradually, reasonable movements accumulated into lateral resonance, and the bridge began to sway. No one intended harm. No single action caused the problem. Everyone was simply trying to walk forward. Still, the bridge had to be closed.

The solution came quietly. Dampers were added—mechanisms designed to absorb vibration rather than amplify it. The bridge remained the same structure, yet its behavior changed. It learned how not to react.

That image became the quiet center of Resonance.

Much of my life has unfolded close to technological and decision-making systems. As a science and technology writer and editor, I watched uncertainty gradually disappear as research entered public narrative—hesitation trimmed away, complexity reshaped into inevitability. Later, as an entrepreneur and organizational executive, I stood on the opposite side, expected to define direction and absorb uncertainty for others. These roles felt necessary. Over time, however, something began to wear thin.

When systems operate too smoothly, when hesitation is interpreted as inefficiency, certain forms of human experience quietly fade. This does not happen through force. It happens through alignment. People adjust. Rhythms synchronize. Consensus forms. Reflection narrows. At some point, you notice that your pace has shifted, and you are no longer sure when that happened.

The three months of lockdown in Shanghai in 2022 gave this sensation a concrete shape. What lingered most was not confinement itself, but the realization that individual experience had lost its weight as a variable. Explanations were already in place. Decisions had already been made. Life continued according to a logic that did not require your interior state. You were not singled out; you were absorbed. Standing inside that system felt like standing on a gently swaying bridge—constantly adjusting, only to feel the movement grow stronger.

Living in London later introduced a contrasting rhythm. Bureaucracy, legal procedures, and social safety systems often moved slowly, sometimes painfully so. Problems resisted quick resolution. Yet within that inefficiency, another quality became visible. Delay created distance. Distance allowed restraint. Certain outcomes were prevented simply because systems could not move fast enough to finalize them.

Around the same time, I found myself repeatedly returning to an event that had taken place in Seattle years earlier: Richard Russell, a ground service worker who, late one evening, boarded an aircraft he was not meant to fly, took off alone, circled the sky, spoke calmly to air traffic control, and then disappeared.

He left behind no declaration of purpose, no appeal, no audience to convince. What remains are recordings that register as fragments rather than statements—apologies, small jokes, unfinished thoughts. His flight has been subjected to extensive analysis, diagnosis, and classification, yet the unease it generates continues to linger. What held my attention was the form of the event itself. It carried the contour of a novel, while withholding the sense of explanation that fiction often supplies. The event unfolded fully and quietly, then reached its end. When set against systems built to predict, stabilize, and correct, his action appeared uniquely dangerous. The risk did not lie in its destructive potential, but in its posture toward meaning. It moved forward without appealing for interpretation. It unfolded without seeking recognition. It occurred, and then it stopped.

As I was writing this essay and beginning work on Resonance, something unexpetedly occurred in my real life that brought me into a painful alignment with the world I was trying to describe. To this day, I am unable—and unwilling—to recount that incident fully online. Not because it is unspeakable, but because I understand what would happen the moment it is articulated. Once expressed, it would be captured again: logged, categorized, correlated, fed back into systems designed to assess risk, predict states, and infer futures. Expression would not lead to response; it would lead to re-entry. Even this piece would inevitably become part of it.

When systems attempt to preempt hypothetical crises through big data, statistical modeling, correlation, and prediction, individual explanation ceases to function as communication. It is absorbed, flattened, and dissolved into preconclusions generated elsewhere. In that moment, what arises is not helplessness, but something more arresting—a kind of paralysis that comes from realizing there is no longer a position outside the narrative being constructed around you. What stands before you is a fully formed, internally coherent story you are compelled to inhabit. Action and will are no longer legible as expressions; they appear only as disruptive noise within an otherwise stable model. In some cases, definition precedes action entirely—you are classified before you move.

Alongside these structural experiences, my personal life carried a steady undercurrent of anxiety and existential doubt. Family relationships, ongoing responsibility, and the peculiar intimacy of urban life sharpened my sensitivity to connection. The desire to be understood lived alongside a quiet fear of total understanding—because full understanding often dissolves boundaries. Cities place people close together, yet rarely allow genuine meeting. Relationships encourage endurance and acceptance, but seldom offer space to pause and ask what happens when adjustment becomes exhaustion.

My training in neuroscience deepened this unease. Consciousness revealed itself as delayed, fragile, and easily shaped by meaning. Action often comes first; explanation follows. Understanding stabilizes, sometimes at the cost of freedom. This awareness made me cautious around language that promises depth and elevation—terms like "awakening," "adaption," or "deep-diving." Clarity, too, can function as a form of control.

Resonance took shape where these experiences overlapped—personal, structural, emotional, and moral. It is less a warning than a question. When technology, meaning, responsibility, and efficiency begin to reinforce one another, what kind of movement emerges? And when instability appears, should attention always turn toward correcting human behavior, or toward examining the system's capacity to absorb motion?

I wrote Resonance to protect a vanishing space: a space where hesitation remains possible, where synchronization is optional, where explanation does not immediately close experience. The Millennium Bridge was stabilized not by retraining those who crossed it, but by allowing the structure itself to absorb vibration. That gesture continues to guide my thinking. I am interested in whether a world can exist that does not amplify every human uncertainty into something that calls for correction or acceleration.

If Resonance feels restrained or distant, that quality grows out of lived posture rather than stylistic intention. It reflects an effort to remain upright amid ongoing anxiety and responsibility, to resist automatic alignment, and to carry the weight of reality without surrendering entirely to any rhythm that presents itself as inevitable. And to remain in place, without claiming it as the one we are meant to occupy.

Resonance will unfold on Substack, chapter by chapter.
              `}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

