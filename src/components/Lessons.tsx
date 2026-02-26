import type { LessonStep } from "../lessons/lessons";

export default function Lessons(props: {
  lesson: LessonStep;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
}) {
  const { lesson, index, total, onPrev, onNext, onReset } = props;

  return (
    <div style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
        <div style={{ fontWeight: 900 }}>{lesson.title}</div>
        <div style={{ color: "#666", fontSize: 12 }}>{index + 1} / {total}</div>
      </div>
      <div style={{ marginTop: 6, color: "#222", lineHeight: 1.35 }}>{lesson.body}</div>

      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button onClick={onPrev} disabled={index === 0}>◀ Prev</button>
        <button onClick={onNext} disabled={index === total - 1}>Next ▶</button>
        <button onClick={onReset} style={{ marginLeft: "auto" }}>Reset lesson state</button>
      </div>
    </div>
  );
}