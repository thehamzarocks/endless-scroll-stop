let lastMaxDistance = 0;
const allowedDistance = 40000;

onScroll = () => {
  const scrollHeight =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (scrollHeight > lastMaxDistance + allowedDistance) {
    lastMaxDistance += allowedDistance;
    alert("Stop scrolling and go to bed!");
  }
};

document.addEventListener("scroll", onScroll, { passive: true });
