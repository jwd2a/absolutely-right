Recently, I was using Claude Design to work on a presentation deck for an internal company all-hands meeting. So far, I've been impressed with its ability to create *very* nice presentations that are visually stunning and follow a strong narrative. My only slight criticism is that, like everything AI (and other waves of technology before this, see Bootstrap), it has a *look*, and as someone who is highly visually attuned (another way of saying picky), I don't want that look. I want *my* look.

My first thought was that I'd simply add to the beginning of my prompt, something about some of the people that I thought did a good job at this. I figured that the LLM would be able to anchor strongly to those individuals and their styles, and give me a good blend of those people. 

The first one I thought of was Seth Godin, who I took a lot of early inspiration from. Then I couldn't think of anyone else. So I turned to the bot.

## People -> Prompt

My initial instinct was simply to ask Claude for examples of people who were strong in this style of presenting, thinking I'd use that list of names in my prompt to help guide it to this style.

Instead, I tried something a little more meta. I asked Claude for advice on how I should even think about this problem:

> when I made slide decks, I like the slides to be very minimal, seth godin esque. Large images, single phrases or words, no titles or bullets, etc. I like the presentation to act as punctuation to my talk, not be the talk itself. I want to give claude design this guidance to make it more accurate generating slides for me. Should I provide a prompt and examples of people who have done this well? Give me an approach I can use

What came back was really enlightening! 

The first observation was that my approach was, well, wrong:

> Yes to both — but the examples that actually move a generative model aren't screenshots of famous decks (it can't reliably "see" or recall those), they're explicit principles plus a few do/don't transformations. The real work is suppressing the model's default. Left alone, any LLM regresses to the "informative slide" prior: title, three bullets, maybe a stock image. You have to actively name the alternative job and forbid the default.

What I love about this is that instead of being sycophantic and just giving me what I asked for, it used its understanding of LLMs to create a better approach. 

Claude continued with a philosophy it would use:

>Here's the approach I'd use.
> 
> **1. Give it a philosophy line, not just rules.** The one-sentence framing does more than any constraint list because it changes what the model thinks the artifact is _for_. Something like: "Slides punctuate my spoken talk; they are not the talk." That single reframe kills most of the bullet-point instinct.
> 
> **2. Name the methods, not the people.** Models reason well from recognized technique names. "Lessig method" (rapid single words/phrases synced to speech), "Takahashi method" (huge text, one idea), and "Godin/Duarte glance test" (comprehensible in under 3 seconds) are all things it can operationalize. Naming Seth Godin alone is weaker than naming the mechanic behind him.
> 
> **3. Tell it where the cut content goes.** This is the part people forget. If you say "no bullets, few words," the model panics about losing your substance and sneaks it back onto the slide. Instead instruct it to push all the real content into **speaker notes**. That gives it a release valve and keeps slides clean.
> 
> **4. Hard constraints + transformations.** A couple of before/after examples teach faster than ten rules.

Finally, it suggested the prompt it would use: 

> STYLE: Minimal, Seth Godin / Presentation Zen.
>
> Philosophy: These slides punctuate my spoken talk — they are NOT the talk.
> The audience listens to me; the slide gives one visual beat. If a slide can
> be read instead of heard, it's wrong.
>
> Per slide:
> - ONE idea. One image OR one phrase. Never both competing.
> - 0–6 words max. Often a single word. No sentences.
> - NO titles, NO bullets, NO logos, NO footers, NO slide numbers.
> - Full-bleed image when used. Text large enough to read from the back row
>   (think 80pt+ equivalent). High contrast.
> - Must pass the glance test: understood in under 3 seconds.
>
> Methods to apply: Takahashi (giant text, one idea) and Lessig (rapid
> single words/phrases that sync to what I'm saying).
> 
> Content handling: All substance, data, and explanation goes in SPEAKER NOTES,
> never on the slide. The slide is the punctuation; the notes are my script.
> 
> Do / Don't:
> - "Our churn dropped 40% after we changed onboarding" → slide: the number
>   "40%" full screen (or an image of a door). Detail → speaker notes.
> - A slide titled "Three Benefits" with three bullets → split into three
>   slides, one word each, or cut to one image. Never a bullet list.
> 
> When unsure, choose fewer words and a stronger image.

## The Lesson: Use the LLM Against Itself

LLMs know how LLMs work better than you do. Ergo, asking the LLM to write your prompt, instead of _you_ writing the prompt can both save you time, and also give you an approach that is generally far superior to writing the prompt yourself.

Also, this is the foundation of how loop engineering works, which all signs point to as the future of agentic engineering, so getting used to thinking this way is a useful skill and habit to develop.