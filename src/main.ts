import SplitType from 'split-type'

console.log('Welcome to Vite + TypeScript + Webflow!')

function pageLoad() {
  new SplitType('[split-type="line"]', {
    types: 'lines',
  })

  const load = gsap.timeline()
  load
    .from('[g-element="heading"], [g-element="sub-heading"], .line', {
      opacity: 0,
      yPercent: 20,
      rotate: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    })
    .from(
      '[g-element="img-main"]',
      {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      0
    )
}
pageLoad()

const contentScroll = gsap.timeline({
  defaults: { opacity: 0, ease: 'power2.out' },
  scrollTrigger: {
    trigger: '[g-scroll="trigger"]',
    start: 'top 60%',
    end: 'bottom 60%',
    scrub: 1,
  },
})
contentScroll.from('[g-element="content"]', { yPercent: 30 })

const imgScrollOne = gsap.timeline({
  defaults: { ease: 'power2.out' },
  scrollTrigger: {
    trigger: '[g-scroll="trigger"]',
    start: 'top top',
    end: 'bottom top',
  },
})

gsap.set('[g-element="img"]', {
  clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
})
imgScrollOne.to('[g-element="img"]', {
  clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)',
  stagger: 0.1,
})

const imgScrollFull = gsap.timeline({
  defaults: { ease: 'power2.out' },
  scrollTrigger: {
    trigger: '[g-scroll="trigger-2"]',
    start: 'top 70%',
    end: 'bottom 70%',
  },
})

imgScrollFull.from('[g-element="img-full"]', {
  opacity: 0,
})

const contentScrollTwo = gsap.timeline({
  defaults: { opacity: 0, ease: 'power2.out' },
  scrollTrigger: {
    trigger: '[g-scroll="trigger-3"]',
    start: 'top 60%',
    end: 'bottom 60%',
  },
})
contentScrollTwo.from('[g-element="content-2"]', { yPercent: 30 })

const imgScrollTwo = gsap.timeline({
  defaults: { ease: 'power2.out' },
  scrollTrigger: {
    trigger: '[g-scroll="trigger-4"]',
    start: 'top 70%',
    end: 'bottom 70%',
  },
})

gsap.set('[g-element="img-2"]', {
  clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
})
imgScrollTwo.to('[g-element="img-2"]', {
  clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)',
  stagger: 0.1,
})

const imgScrollThree = gsap.timeline({
  defaults: { ease: 'power2.out' },
  scrollTrigger: {
    trigger: '[g-scroll="trigger-5"]',
    start: 'top 70%',
    end: 'bottom 70%',
  },
})

gsap.set('[g-element="img-3"]', {
  clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
})
imgScrollThree.to('[g-element="img-3"]', {
  clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)',
  stagger: 0.1,
})
