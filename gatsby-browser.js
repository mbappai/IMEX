/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}