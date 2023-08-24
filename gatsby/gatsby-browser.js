exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("Goldlabel Updated")
  if (answer === true) {
    window.location.reload()
  }
}
