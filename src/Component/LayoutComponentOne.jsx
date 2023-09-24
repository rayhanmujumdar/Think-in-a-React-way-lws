import useResizeScreen from "../hooks/useResizeScreen";

export default function LayoutComponentOne() {
  const [onScreenSize] = useResizeScreen(800);
  return (
    <div>You are browsing on {onScreenSize ? "small" : "large"} device</div>
  );
}
