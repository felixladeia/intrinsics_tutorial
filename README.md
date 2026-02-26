# 📷 Camera Intrinsics & Extrinsics Playground

An interactive **visual teaching tool** to understand **camera intrinsics, extrinsics, projection geometry, and rays** — built with **React + TypeScript + Three.js** and deployed on **GitHub Pages**.

👉 **Live demo:**  
https://felixladeia.github.io/intrinsics_tutorial/

---

## 📘 Academic-Style Explanation (Short)

This project provides an interactive visualization of the **pinhole camera model**, a foundational abstraction in computer vision and robotics. The pinhole model describes the mapping between 3D world coordinates and 2D image coordinates through a combination of **intrinsic** and **extrinsic** parameters.

The **intrinsic parameters**, commonly represented by the matrix \(K\), encode the internal geometry of the camera, including focal lengths \(f_x, f_y\) and the principal point \((c_x, c_y)\). These parameters determine how rays intersect the image plane and directly control the scale and offset of projected points.

The **extrinsic parameters** define the rigid transformation between the world coordinate frame and the camera coordinate frame. They are expressed as a rotation matrix \(R\) and a camera center \(C\), mapping world points \(X_w\) into camera coordinates \(X_c = R (X_w - C)\).

This application explicitly visualizes the full projection pipeline:

\[
X_w \;\xrightarrow{\text{extrinsics}}\; X_c
\;\xrightarrow{\text{perspective division}}\;
(x_n, y_n)
\;\xrightarrow{K}\;
(u, v)
\]

In addition, the system supports **ray back-projection**, where a pixel coordinate is mapped back into a 3D ray originating from the camera center. This is essential for understanding triangulation, depth estimation, and geometric reasoning in multi-view systems.

By linking mathematical parameters to real-time visual feedback, the tool aims to strengthen geometric intuition and bridge the gap between symbolic camera models and spatial understanding.

---

## ✨ Features

- Interactive control of camera intrinsics (`fx`, `fy`, `cx`, `cy`)
- Interactive control of camera extrinsics (position, yaw, pitch, roll)
- Side-by-side **3D scene** and **2D image-plane projection**
- Visualized **camera frustum**
- **Pixel click → 3D ray** visualization
- Auto-centered and framed initial camera pose
- Designed for teaching and conceptual clarity

---

## 🛠️ Tech Stack

- React + TypeScript
- Vite
- Three.js
- HTML Canvas
- GitHub Pages

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

---

## 🌍 Deployment

The project is deployed on GitHub Pages under:

```
https://felixladeia.github.io/intrinsics_tutorial/
```

The Vite base path is configured as:

```ts
base: "/intrinsics_tutorial/"
```

---

## 📜 License

MIT License — free to use for learning, teaching, and demonstrations.
