import useResizeScreen from "../hooks/useResizeScreen";
export default function LayoutComponentTwo() {
  const [onScreenSize] = useResizeScreen(600);
  return (
    <div className={onScreenSize ? "small" : "large"}>
      This is our another component
    </div>
  );
}
