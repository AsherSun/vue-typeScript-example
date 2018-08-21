export default function rem(grid: number): void {
  const htmlDom = document.documentElement;
  let equipmentWidth = htmlDom.getBoundingClientRect().width;
  if (equipmentWidth > 640) {
    equipmentWidth = 640;
  }
  htmlDom.style.fontSize = (equipmentWidth / grid) + 'px';
}
