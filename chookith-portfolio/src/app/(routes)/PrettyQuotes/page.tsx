import Link from "next/link";

export default function PrettyQuotes() {
  return (
    <main className="dark:bg-nyx dark:text-white">
      <section className="flex w-auto flex-col">
        <section className="mx-5 mt-20 flex flex-col items-center justify-center lg:mt-24">
          <article className="mt-10 flex flex-col text-center">
            <h1 className="text-3xl">Welcome!</h1>
            <h2 className="mt-5 text-2xl">
              this is a little collection of the quotes i find pretty
            </h2>
            <h3 className="my-5 text-xl ">
              Just a heads up <br />
              if you didn't like the quotes on the home page
              <br /> or have religious trauma <br /> you probably won't like
              these ones <br /> so go ahead and hit the "Go Home" button for me
              :)
            </h3>
            <Link
              href="/"
              className="mb-10 rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1  hover:shadow-xl  active:translate-y-1 dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
            >
              Go Home
            </Link>
          </article>
        </section>
        <ul className="row-auto mx-5 my-10 grid w-auto grid-cols-1 flex-col gap-5 text-left lg:grid-cols-2">
          <li className="w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col rounded-3xl bg-ashBlue p-5 shadow-xl transition delay-75 lg:flex  dark:bg-caribbeanCurrent">
            <h3 className="text-2xl">On Being Named Messiah</h3>
            <p>
              <br />
              <b>i.</b> If your shoulder blades were to bend themselves back
              into wings, your kneecaps would swallow themselves like cavanagh;
              the shiver in your throat would earthquake into melted choclate
              and sunshine. The lampshade would nebula into burning bush and old
              oak tombstones
              <br />
            </p>
            <p>
              <b>ii.</b> you say gabriel visits you in your sleep, tell you with
              deft enochian and bare teeth that{" "}
              <i>
                you are comprised of spider silk and the favorite color of my
                father
              </i>{" "}
              before speaking about the end of the world, the ichor in your
              palms. Red hyacinth dust drifts off his eyelashes, and apathy
              falls off his tongue like boiling blood
              <br />
            </p>
            <p>
              <b>iii.</b> For the next month, there are bruises on your elbows
              and the remenants of a dead language rattling in your lungs. You
              wake up in the river, thighs carved with sigils and crows perching
              on your shoulders, weeping ichor and ancient clay. the names of
              your newfound kin ring in your ears until your partner confesses
              that you scream them in your sleep.
              <br />
            </p>
            <p>
              <b>iv.</b> gabriel visits again, six months after you realize that
              your native language has slipped from your tongue and realize that
              seclusion is more of a gift than another cross for you to bear.
              afterwards, you tell me that he had four sets of wings, three eyes
              and seventeen hearts, and the most unusual feature was the
              trembling in his steps, his inability to remain still as he phased
              in and out of this world into another.
              <br />
              <b>v.</b> you say his reverence was a holy march, a fragment of
              bone an aching lung
            </p>
            <p className="text-center">-unknown</p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col rounded-3xl bg-ashBlue p-5  shadow-xl transition delay-75 dark:bg-caribbeanCurrent">
            <h3 className="text-2xl">
              Fallen Angel Prays Beside The Coffee Maker
            </h3>
            <p>
              <br />
              all words come from somewhere. cradle of the larynx, riverbank of
              the vocal cords. once upon a time you pressed your fingertips to
              my not-adam's
              <br />
            </p>
            <p>
              <br />
              apple & call it <i>holy, holy</i> gifted me with the shapes of the
              word wings & suddenly flight. In spite of everything, I'll still
              spend this morning praying as steam
              <br />
            </p>
            <p>
              <br />
              rises & sugar melts : oh starmaker, bless bees for their dancing,
              bless the neighbor for her breadmaking, bless the sweat running
              down my forehead & stinging
              <br />
            </p>
            <p>
              <br />
              my eyes. I am teaching myself how to sing hymns again for you,
              slowly, with this small human mouth, with its crooked teeth & its
              blackberry-craving tongue.
              <br />
            </p>
            <p>
              <br />
              While I wait for the coffee to cool, my lover is moving through
              our garden, tending to the carrots & to the fig tree, checking the
              scar left behind in the land-
              <br />
            </p>
            <p>
              <br />
              scape after I fell. <i>violets are growing there now,</i> he told
              me last week as he came in from the rain, wet shirt clinging to
              his chest, eyes shining. <i>wild violets, same</i>
              <br />
            </p>
            <p>
              <br />
              <i>color as the heart of a saint.</i> & lord there is no word more
              beautiful than his name. I will be singing it to him until the
              heat-death of this universe robs
              <br />
            </p>
            <p>
              <br />
              us all of sound. holy, holy is the gleam of his teeth as he
              laughs. you know I let him touch my shoulder blades now?
              <br />
            </p>
            <p className="text-center">
              <i>-Keaton St. James</i>
            </p>
          </li>
          <li className="flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightYellow p-5 text-center shadow-xl transition delay-75 dark:bg-goldMetallic">
            <h3 className="text-2xl">Apollo</h3>
            <p>
              <br />
              The sun inside of him rages like wildfire and he is
            </p>
            <br />
            <p>
              gold <br />
              gold <br />
              gold <br />
            </p>
            <p>and he is </p>
            <p>
              scorching the skin of my heart,
              <br /> yet still he pretends that he is safe for me to love,
              <br /> that his hands are gentle,
              <br /> that his fingerprints won't be seared into the notches of
              my spine.
            </p>
            <p>
              The sun inside of him could set the kingdom ablaze; he knows this,
              he does.
            </p>
            <p>
              And he still asks me to love him,
              <br />
              to face the flame.
            </p>
            <p>Find me in the ashes</p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col rounded-3xl bg-ashBlue p-5 shadow-xl transition delay-75 dark:bg-caribbeanCurrent  ">
            <h3 className="text-2xl">Guardian</h3>
            <p>
              a six-winged angel leans against the tennis court fence, xir
              knuckles a mess of blood, xir mouth a mess of thorns <br />
            </p>
            <p>
              <br />
              <i>DID I WIN?</i>
            </p>
            <p>
              <br />
              the angel asks.
              <br />
            </p>
            <p>
              xir tennis racket shuddering with the weight of holy fire.
              <br />
            </p>
            <p>
              <br />
              <i>You did,</i>
              <br />
              says the very small boy on the other side of the court, grinning.
              he wipes sweat from his forehead with the back of his hand.
              <br />
              <i>all three games. that was so beautiful</i>
            </p>
            <p>
              <br />
              <i>GOD BLESS,</i>
            </p>
            <p>
              <br />
              declares the angel as xe brushes the dust off xir lime green
              tennis shorts.
              <br />
            </p>
            <p>
              <br />
              <i>
                LET'S GO DOWNTOWN, KID THIS ROUND OF MINT CHOCLATE ICECREAM IS
                ON ME.
              </i>
            </p>
            <p className="text-center">
              <i>-Keaton St. James</i>
            </p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-ashBlue p-5 shadow-xl transition delay-75 dark:bg-caribbeanCurrent ">
            <p>
              you lie awake under the vanilla milk moon and wait for the
              universe to sing you it's song about the first sunrise
              <br />
            </p>
            <h3 className="text-2xl">
              <br />
              the birth of ethereal beings <br />
            </h3>
            <p>
              <br />
              the universe begins to hum in sync with your thoughts and you
              start to understand the dead language of the gods
              <br />
            </p>
            <p>
              <br />
              and you feel their ichor in your veins and their heartbeats in the
              pit of your stomach. you hear the constellations
              <br />
            </p>
            <p>
              <br />
              flicker and hiss and burn you decipher the evergreen's fading
              whispers. the universe sings of the plum skin-stained
              <br />
            </p>
            <p>
              <br />
              sky and how it shattered open and fell into itself at the holy
              blow of God's breath, so clear and humble and
              <br />
            </p>
            <p>
              <br />
              breathtaking. the universe sings of the ruined angel's rebirth:
              the sun, how he burns eternally; a small price to pay <br />
            </p>
            <p>
              <br />
              for his sins. the universe sings of the ground and the fallen,
              sharp edged stars buried within, of the souls that sprouted
              <br />
            </p>
            <p>
              <br />
              from the fallen, sharp edged stars, of the bodied cocoons
              shielding the souls, of the love made using those bodies. the
              <br />
            </p>
            <p>
              <br />
              universe sings of creature who roam the earth with nebulae residue
              in their eyes and hearts that encompass home.
              <br />
            </p>
            <p>
              <br />
              <i>the universe sings to you. the universe sings of you</i>
              <br />
            </p>
            <p>
              <br />
              <i>-aarah:)</i>
              <br />
            </p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col justify-center rounded-3xl bg-ashBlue p-5 shadow-xl transition delay-75 dark:bg-caribbeanCurrent  ">
            <h3 className="text-2xl">Messiah</h3>
            <p>
              <br />
              <b>i. </b> your favorite word is <i>yesha.</i> you've got blisters
              on your feet, dirt on your shins, sunburn on your neck, and the
              taste of blood in your mouth, always. everyone you touch burns
              like a blue start. trout would become matzah if you asked. reeds
              would become swords if you asked
              <br />
            </p>
            <p>
              <br />
              <b>ii.</b> hope is synonymous with armor on your tongue , and all
              the hymns are truely warsongs. what does forgiveness mean? it
              means your hair dripping with spikenard ointment. it means your
              cheekbones algow in firelight. it means kiss me. we are all holy
              and there is no reason to be afraid of what comes next.
              <br />
            </p>
            <p>
              <br />
              <b>iii.</b> you always loved brambles, even when they tore the
              skin of your hands to pieces
              <br />
            </p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-teaGreen p-5 shadow-xl transition delay-75 dark:bg-mossGreen  ">
            <h3 className="text-2xl">Herald</h3>
            <p>
              <br />
              4 hours into your beginning there was cattle, offerings and
              invention. When your brother found you, you were a thief, a liar
              and a trickster.
              <br />
            </p>
            <p>
              <br />
              44 days into your beginning. your mother's name coaxes in the end
              of spring, you are a herald of the your father and one of your
              uncles and theres also a flower who should have been a boy for
              longer. your brother also knows this sorrow
              <br />
            </p>
            <p>
              <br />
              4444 years into your beginning. every aspect of society rings with
              memories of you. you have worship on the other side of the globe
              but the price that came with it was...
              <br />
            </p>
            <p>
              <br />
              its cruel to give us so many languages to say i love you in, with
              only enough time to learn a few.
              <br />
            </p>
            <p className="hidden">
              <br />
              for a god not bound to tell the truth, youre the one seeking it
              <br />
              theres always a weak spot in the boundary. a gate. a broken panel.
              love.
              <br />
              where do you draw the line between dreams and nightmares? when
              does heads become tails?
              <br />
              remind me of what it was to travel. unbound. unrestrained.
              unhindered by the weight of the rest of your domain.
              <br />
              remind me what it was to be young. bound only by dawn and dusk.
              restrained only by your imagination. hindered only by height.
              <br />
              remind me of what it was to have. freedom. youth. dreams
            </p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightYellow p-5 text-center shadow-xl transition delay-75 dark:bg-goldMetallic  ">
            <h3 className="text-2xl">Wild</h3>
            <p>
              <br />
              Act i. Womenhood
              <br />
              In the wings of a theatre you could be anything. a demand for
              silence. a disemobody voice. the unfathemable beginning
              <br />
              The stagelights however demands the definition of the self.
              <br />
              <i>
                Why do you dress like that? what's with the makeup? why do you
                act like that? why...
              </i>
              <br />
              When you demand silence in the stage lights, you are seen as
              something rather than someone. A broken character. A reason not to
              be believed
              <br />
              <i>
                You know some of the most silent characters will be better then
                those who speak.
              </i>
              <br />
              But what is the point of the voice if not to be heard. If not to
              scream
            </p>
            <p>
              <br />
              act ii. man hood
              <br />
              when the feminine mask melted away in the tears. your screams were
              finally heard and feared
              <br />
              when drowning these memories of a past life, the burn in the back
              of your throat began to taste like symphonies of lyres and choirs.
              the choir asking for more. but more of what?
              <i>
                <br />
                lust?
                <br />
                alcohol?
                <br />
                violence?
                <br />
              </i>
              would you believe me if I told you I lost it. Would you still love
              me if I did listen to the choir?
            </p>
            <p>
              <br />
              act iii. god hood
              <br />
              <i>enter Dionysus</i>
              <br />
              [Dionysus]:
              <br />
              do you believe in me yet? no? even after you tasted my wine soaked
              lips or what about when i drenched myself in your blood
              <br />
              next time i die i'll come ask you.
              <br /> but in the meantime the flower garlands and ivy seem
              brighter. the grapes sweeter. and my festivals marrier.
            </p>
            <p>
              <br />
              <i>end scene</i>
              <br />
            </p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightYellow p-5 text-center shadow-xl transition delay-75 dark:bg-goldMetallic  ">
            <h3 className="text-2xl">Wild Fire</h3>
            <p>
              <br />
              7 hours into life and you were punished for protecting your mother
              by your own father. but your birth was the fury of life and
              destruction wrapped in the loving silks of art. you knew this was
              who you were before you knew yourself
              <br />
            </p>
            <p>
              <br />
              time split itself in half so that we could witness the glory of
              you and your sister. did you know there are some places on Gaia
              that love you so much your light never sets there. ever. but those
              same place will never know how you mold oranges into blues. how
              pinks and purples can hold each other like you hold you sister.
              how falling can be so beautiful.
              <br />
            </p>
            <p className="hidden">
              <br />
              if the women you loved knew of this place, do you think they would
              have run?
              <br />
            </p>
            <p className="hidden">
              <br />
              there was always something beautiful about the way you loved
              mortals in the myths. even after being advised against it by
              yourself and your brother, you allow yourself to be your own
              tradgedy. I guess you always knew the best art comes from the
              saddest of people.
              <br />
            </p>
            <p>
              <br />
              when i was young my days were spent dancing and sing. my daydreams
              were sun swept, rolling hills filled with hyacinths that would put
              rainbows to shame. now i am standing as those around me fall to
              your plagues. my daydreams are now prophecies of wars, marriage
              and endings before beginnings. you told me no harm would come to
              me by your hands.
              <br />
            </p>
            <p className="">
              <br />
              can a phoenix love itself knowing everything it touches will burn
              <br />
            </p>
            <p className="hidden">
              <br />

              <br />
            </p>
          </li>
          <li className=" flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-ashBlue p-5 text-center shadow-xl transition delay-75 dark:bg-caribbeanCurrent  ">
            <h3 className="text-2xl">angel</h3>
            <p>
              <br />
              i. in the beginning the lord said, <i>let there be cosmos.</i> so
              when you arrived it is as a mass of buring stardust, suns for
              bones and constellations for eyes. your body, a winged fragment of
              space. the people will never be able to know the true form of you,
              but subconsciously they still fear what lives inside of you. your
              wildernesses. your uncondensability. your many blue-tinted hungers
              <br />
            </p>

            <p>
              <br />
              ii. <i>nolite timere</i>, you say to us tenderly every time, as if
              your mouth were not full of blood
              <br />
            </p>
            <p>
              <br />
              iii. but he declares, <i>I've named you messenger</i>, and on your
              gravity-heavy tongue you can taste the quite beginnings of ink.
              <br />
            </p>
            <p>
              <br />
              vi. It takes god three billion years to fashion man from oceanic
              bacteria. It takes even longer to fashion the human guise which
              you drape over your galactic skin. In nazareth the olives smell
              too much of salt, but mary, sunburnt and laughing, has you try
              them anyway. she holds them out to you in her fist. you think,{" "}
              <i>
                {" "}
                there are no words that can describe how small the human heart
                is, and yet how large in love.
              </i>
              Part of you, peering upon our fragility, aches.
              <br />
            </p>
            <p>
              <br />
              v. one day there will be saviours walking the parched earth with
              their blistered heels. in the meantime, and always, there will be
              the polaris of your throat helping to sing us home.
              <br />
            </p>
          </li>
        </ul>
      </section>
      <footer className=" h-full  w-full rounded-2xl bg-ashBlue p-10 shadow-xl dark:bg-caribbeanCurrent">
        <h1 className="mb-5 animate-[dropIn_1200ms_ease_300ms_backwards] text-center text-5xl">
          Let's Get In Contact
        </h1>
        <article className=" flex w-full basis-1/2 flex-col lg:flex-row lg:divide-x lg:divide-y-0">
          <ul className="mb-5 grid basis-1/4 grid-cols-2 grid-rows-2 items-center justify-center gap-5 md:mr-5 lg:mb-0 lg:basis-1/2 xl:basis-1/4">
            <li>
              <Link
                href="mailto:hello@chookith.com"
                className="flex animate-[dropIn_1200ms_ease_350ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl active:translate-y-1 dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
              >
                Email
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Chookith"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex animate-[dropIn_1200ms_ease_400ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl active:translate-y-1 dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/chookith-f2dda3/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex animate-[dropIn_1200ms_ease_450ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl active:translate-y-1 dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/chookith001?igsh=am42MThmaGVvbmtr&utm_-source=qr"
                target="_blank"
                rel="noreferrer noopener"
                className="flex animate-[dropIn_1200ms_ease_500ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-lg active:translate-y-1 dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
              >
                Instagram
              </Link>
            </li>
          </ul>

          <p className="flex basis-3/4 animate-[dropIn_1200ms_ease_600ms_backwards] items-center justify-start border-y py-10 text-center text-2xl lg:py-0 lg:pl-5">
            Feel free to get in touch! I'd love to get some freelance work{" "}
          </p>
        </article>
      </footer>
    </main>
  );
}
