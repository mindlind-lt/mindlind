import { t as e } from "./rolldown-runtime.DsXBSD_B.mjs";
import {
	I as t,
	P as n,
	T as r,
	V as i,
	c as a,
	k as o,
	l as s,
	o as c,
	z as l,
} from "./react.CQg9dmOM.mjs";
import { A as u, X as d, a as f, w as p } from "./framer.OLO5kSrG.mjs";
function m(e) {
	let {
			images: r = [],
			count: c = Math.max(8, r.length || 16),
			scrollSpeed: l = 0.8,
			spinDeg: u = 24,
			phaseStepDeg: d = 10,
			spacing: f = 56,
			cardW: m = 180,
			cardH: g = 220,
			radius: _ = 18,
			curveAmp: v = 120,
			angleDeg: y = -12,
			tiltYdeg: b = 8,
			camYawDeg: x = 12,
			camPitchDeg: S = -6,
			camRollDeg: C = 0,
			camDist: w = 900,
			camFovDeg: T = 32,
			camTargetX: E = 0,
			camTargetY: D = 0,
			camTargetZ: O = 0,
			stopMotionInEditor: k = !1,
		} = e,
		A = o(null),
		j = o(null),
		M = o(null),
		[N, P] = t(r.length > 0),
		[F, I] = t(r.length > 0 ? 1 : 100),
		L = o(null),
		R = o(0),
		z = () => Math.min(i.devicePixelRatio || 1, 1.5),
		B = () => {
			let e = !!k && p.current() === p.canvas;
			return {
				count: c,
				scrollSpeed: e ? 0 : l,
				spinDeg: e ? 0 : u,
				phaseStepDeg: d,
				spacing: f,
				cardW: m,
				cardH: g,
				radius: _,
				curveAmp: v,
				angleDeg: y,
				tiltYdeg: b,
				camYawDeg: x,
				camPitchDeg: S,
				camRollDeg: C,
				camDist: w,
				camFovDeg: T,
				camTargetX: E,
				camTargetY: D,
				camTargetZ: O,
			};
		},
		V = () => {
			let e = String.raw`
      import * as THREE from ${JSON.stringify(h)}

      /** @typedef {{group:THREE.Group, front:THREE.Mesh, u:number, imgIdx:number}} Item */

      let renderer /** @type {THREE.WebGLRenderer|undefined} */
      let scene /** @type {THREE.Scene|undefined} */
      let camera /** @type {THREE.PerspectiveCamera|undefined} */
      let belt /** @type {THREE.Group|undefined} */

      let items = /** @type {Item[]} */([])
      let textures = /** @type {(THREE.Texture|null)[]} */([])
      let frontGeom /** @type {THREE.BufferGeometry|undefined} */

      const prm = {
        count: 12,
        scrollSpeed: 0,
        spinDeg: 0,
        phaseStepDeg: 10,
        spacing: 56,
        cardW: 180,
        cardH: 220,
        radius: 18,
        curveAmp: 120,
        angleDeg: -12,
        tiltYdeg: 8,
        camYawDeg: 12,
        camPitchDeg: -6,
        camRollDeg: 0,
        camDist: 900,
        camFovDeg: 32,
        camTargetX: 0,
        camTargetY: 0,
        camTargetZ: 0,
      }

      let last = performance.now()
      let tSec = 0
      let animating = false
      const deg2rad = (d) => d * Math.PI / 180
      const clampDpr = (d) => Math.min(Math.max(d || 1, 1), 1.5)
      const smooth01 = (t) => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t)

      const postProgress = (loaded, total) => {
        try { self.postMessage({ type: 'progress', loaded, total }) } catch {}
      }
      const postReady = () => {
        try { self.postMessage({ type: 'ready' }) } catch {}
      }

      const clampR = (w, h, r) => Math.max(0, Math.min(r, Math.min(w, h) / 2))
      const makeShape = (w, h, r) => {
        const c = clampR(w, h, r)
        const s = new THREE.Shape()
        const hw = w / 2, hh = h / 2
        s.moveTo(-hw + c, -hh)
        s.lineTo(hw - c, -hh)
        s.absarc(hw - c, -hh + c, c, -Math.PI / 2, 0)
        s.lineTo(hw, hh - c)
        s.absarc(hw - c, hh - c, c, 0, Math.PI / 2)
        s.lineTo(-hw + c, hh)
        s.absarc(-hw + c, hh - c, c, Math.PI / 2, Math.PI)
        s.lineTo(-hw, -hh + c)
        s.absarc(-hw + c, -hh + c, c, Math.PI, 1.5 * Math.PI)
        return s
      }

      const makeFrontGeom = (w, h, r) => {
        const g = new THREE.ShapeGeometry(makeShape(w, h, r), 8)
        g.computeBoundingBox()
        const bb = g.boundingBox
        const minX = bb.min.x, minY = bb.min.y
        const invW = 1 / (bb.max.x - bb.min.x)
        const invH = 1 / (bb.max.y - bb.min.y)
        const pos = g.attributes.position
        const uv = new THREE.BufferAttribute(new Float32Array(pos.count * 2), 2)
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i), y = pos.getY(i)
          uv.setXY(i, (x - minX) * invW, (y - minY) * invH)
        }
        g.setAttribute("uv", uv)
        g.computeBoundingSphere?.()
        return g
      }

      const applyCover = (tex) => {
        if (!tex || !tex.image) return
        const iw = tex.image.width || 1
        const ih = tex.image.height || 1
        const aImg = iw / ih
        const aCard = prm.cardW / prm.cardH
        if (aImg > aCard) {
          const rx = aCard / aImg
          tex.repeat.set(rx, 1)
          tex.offset.set((1 - rx) / 2, 0)
        } else {
          const ry = aImg / aCard
          tex.repeat.set(1, ry)
          tex.offset.set(0, (1 - ry) / 2)
        }
        tex.needsUpdate = true
      }

      const makeFrontMat = (map) => {
        const m = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          toneMapped: false,
          side: THREE.DoubleSide,
          transparent: true,
          depthWrite: false,
          depthTest: true,
          map: map ?? null,
        })
        if (m.map) applyCover(m.map)
        return m
      }

      const setCamera = () => {
        const a = prm
        camera.fov = a.camFovDeg
        camera.updateProjectionMatrix()
        const yaw = deg2rad(a.camYawDeg)
        const pitch = deg2rad(a.camPitchDeg)
        const r = a.camDist
        const tx = a.camTargetX, ty = a.camTargetY, tz = a.camTargetZ
        camera.position.set(
          tx + r * Math.sin(yaw) * Math.cos(pitch),
          ty + r * Math.sin(pitch),
          tz + r * Math.cos(yaw) * Math.cos(pitch)
        )
        camera.lookAt(tx, ty, tz)
        camera.rotation.z = deg2rad(a.camRollDeg)
      }

      const buildItems = (N) => {
        for (const it of items) {
          if (it.front?.material) it.front.material.dispose?.()
          belt.remove(it.group)
        }
        items = []
        const M = Math.max(1, textures.length)
        const half = ((N - 1) * prm.spacing) / 2
        for (let i = 0; i < N; i++) {
          const grp = new THREE.Group()
          const mat = makeFrontMat(textures[i % M] || null)
          const front = new THREE.Mesh(frontGeom, mat)
          front.renderOrder = 2
          grp.add(front)
          belt.add(grp)
          items.push({ group: grp, front, u: -half + i * prm.spacing, imgIdx: i % M })
        }
      }

      const updateItemMaps = () => {
        const M = Math.max(1, textures.length)
        for (const it of items) {
          const m = it.front.material
          m.map = textures[it.imgIdx % M] || null
          if (m.map) applyCover(m.map)
          m.needsUpdate = true
        }
      }

      const loadTextures = async (urls) => {
        // Emit progress for 0 images case
        if (!urls || urls.length === 0) {
          textures.forEach((t) => t?.dispose?.())
          textures = []
          postProgress(1, 1)
          return
        }
        // Use ImageBitmapLoader in worker environment
        textures.forEach((t) => t?.dispose?.())
        textures = []
        const ibl = new THREE.ImageBitmapLoader()
        ibl.setOptions({ imageOrientation: 'flipY', premultiplyAlpha: 'none' })
        const maxAniso = (renderer?.capabilities?.getMaxAnisotropy?.() ?? 8)
        let loaded = 0
        const total = urls.length
        const promises = urls.map((u, i) => new Promise((resolve) => {
          if (!u) {
            textures[i] = null
            loaded++
            postProgress(loaded, total)
            resolve()
            return
          }
          ibl.load(u, (bitmap) => {
            const t = new THREE.Texture(bitmap)
            t.needsUpdate = true
            t.flipY = false
            t.colorSpace = THREE.SRGBColorSpace
            t.anisotropy = Math.min(4, maxAniso)
            applyCover(t)
            textures[i] = t
            loaded++
            postProgress(loaded, total)
            resolve()
          }, undefined, () => {
            textures[i] = null
            loaded++
            postProgress(loaded, total)
            resolve()
          })
        }))
        await Promise.all(promises)
      }

      const resizeCamera = () => {
        const v = new THREE.Vector2()
        renderer.getSize(v)
        camera.aspect = Math.max(1e-6, v.x / Math.max(1e-6, v.y))
        camera.updateProjectionMatrix()
      }

      const updateAnimLoop = () => {
        const need = Math.abs(prm.scrollSpeed) > 0 || Math.abs(prm.spinDeg) > 0
        if (need && !animating) {
          animating = true
          last = performance.now()
          renderer.setAnimationLoop(loop)
        } else if (!need && animating) {
          animating = false
          renderer.setAnimationLoop(null)
          // Render one final frame to reflect latest props
          loop(true)
        }
      }

      const loop = (single = false) => {
        const now = performance.now()
        const dt = Math.min(0.05, (now - last) / 1000)
        last = now
        tSec += dt

        setCamera()

        const N = items.length
        const spacingNow = prm.spacing
        const period = N * spacingNow
        const half = ((N - 1) * spacingNow) / 2

        const dx = -prm.scrollSpeed * spacingNow * dt
        let sumY = 0

        for (let k = 0; k < N; k++) {
          const it = items[k]
          it.u += dx

          const fadeW = (N <= 3) ? 0 : Math.max(0, spacingNow * 1.1)
          const edgeL = -half, edgeR = half
          const rampL = fadeW > 0 ? Math.min(1, Math.max(0, (it.u - edgeL) / fadeW)) : 1
          const rampR = fadeW > 0 ? Math.min(1, Math.max(0, (edgeR - it.u) / fadeW)) : 1
          const op = smooth01(Math.min(rampL, rampR))

          if (fadeW > 0) {
            if (it.u < edgeL - 0.5 * fadeW) {
              it.u += period
            } else if (it.u > edgeR + 0.5 * fadeW) {
              it.u -= period
            }
          }

          const y = prm.curveAmp * Math.sin(0.055 * it.u)
          const z = 0.06 * prm.curveAmp * Math.cos(0.055 * it.u)
          sumY += y
          it.group.position.set(it.u, y, z)

          const tiltY = deg2rad(prm.tiltYdeg)
          const spinVel = deg2rad(prm.spinDeg)
          const phaseStep = deg2rad(prm.phaseStepDeg)
          const s = it.u / spacingNow
          const spin = spinVel * tSec + phaseStep * s
          it.group.rotation.set(0, tiltY, spin)

          const m = it.front.material
          m.opacity = op
          it.group.visible = op > 0.001
        }

        const avgY = N > 0 ? sumY / N : 0
        const padY = 40
        belt.position.y = -avgY + padY
        belt.rotation.z = deg2rad(prm.angleDeg)

        renderer.render(scene, camera)

        if (single) return
      }

      self.onmessage = async (ev) => {
        const data = ev.data
        if (!data || !data.type) return

        if (data.type === 'init') {
          const { canvas, size, dpr, props, images } = data
          renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
          renderer.setClearAlpha(0)
          renderer.setPixelRatio(clampDpr(dpr))
          renderer.setSize(size.w, size.h, false)
          renderer.outputColorSpace = THREE.SRGBColorSpace

          scene = new THREE.Scene()
          camera = new THREE.PerspectiveCamera(props.camFovDeg, Math.max(1e-6, size.w) / Math.max(1e-6, size.h), 0.1, 5000)
          scene.add(new THREE.AmbientLight(0xffffff, 0.9))

          belt = new THREE.Group()
          scene.add(belt)

          Object.assign(prm, props)
          frontGeom = makeFrontGeom(prm.cardW, prm.cardH, prm.radius)

          await loadTextures(images)
          buildItems(Math.max(2, prm.count))
          resizeCamera()
          updateItemMaps()

          // Decide on animation
          const need = Math.abs(prm.scrollSpeed) > 0 || Math.abs(prm.spinDeg) > 0
          if (need) {
            animating = true
            last = performance.now()
            renderer.setAnimationLoop(loop)
          } else {
            loop(true)
          }

          // Signal ready after first draw
          postReady()
        }

        if (data.type === 'resize') {
          const { size, dpr } = data
          renderer.setPixelRatio(clampDpr(dpr))
          renderer.setSize(size.w, size.h, false)
          resizeCamera()
          if (!animating) loop(true)
        }

        if (data.type === 'props') {
          const props = data.props
          const wChanged = props.cardW !== undefined && props.cardW !== prm.cardW
          const hChanged = props.cardH !== undefined && props.cardH !== prm.cardH
          const rChanged = props.radius !== undefined && props.radius !== prm.radius

          Object.assign(prm, props)

          if (wChanged || hChanged || rChanged) {
            frontGeom?.dispose?.()
            frontGeom = makeFrontGeom(prm.cardW, prm.cardH, prm.radius)
            for (const it of items) it.front.geometry = frontGeom
          }

          if (props.count !== undefined) buildItems(Math.max(2, prm.count))

          updateItemMaps()
          updateAnimLoop()
          if (!animating) loop(true)
        }

        if (data.type === 'images') {
          await loadTextures(data.images)
          updateItemMaps()
          if (!animating) loop(true)
          // Signal ready after images swapped
          postReady()
        }
      }
    `,
				t = new Blob([e], { type: `text/javascript` });
			return URL.createObjectURL(t);
		};
	return (
		n(() => {
			if (!N) {
				(L.current != null && cancelAnimationFrame(L.current),
					(L.current = null));
				return;
			}
			(I((e) => Math.max(e, 1)), (R.current = performance.now()));
			let e = (t) => {
				let n = Math.min(0.2, (t - R.current) / 1e3);
				((R.current = t),
					I((e) => Math.min(96, e + 30 * n)),
					(L.current = requestAnimationFrame(e)));
			};
			return (
				(L.current = requestAnimationFrame(e)),
				() => {
					(L.current != null && cancelAnimationFrame(L.current),
						(L.current = null));
				}
			);
		}, [N]),
		n(() => {
			let e = A.current;
			if (!e) return;
			(j.current?.terminate(),
				(j.current = null),
				M.current?.disconnect(),
				(e.innerHTML = ``));
			let t = document.createElement(`canvas`);
			if (
				((t.style.width = `100%`),
				(t.style.height = `100%`),
				e.appendChild(t),
				!(
					typeof t.transferControlToOffscreen == `function` &&
					typeof Worker < `u`
				))
			) {
				let t = document.createElement(`div`);
				((t.style.cssText = `position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#9aa0a6;font:12px system-ui`),
					(t.textContent = `OffscreenCanvas not supported in this browser.`),
					e.appendChild(t),
					P(!1),
					I(100));
				return;
			}
			r.length > 0 ? (P(!0), I(1)) : (P(!1), I(100));
			let n = t.transferControlToOffscreen(),
				i = V(),
				a = new Worker(i, { type: `module` });
			j.current = a;
			let o = (e) => {
				let t = e.data;
				!t ||
					!(`type` in t) ||
					(t.type !== `progress` &&
						t.type === `ready` &&
						(L.current != null && cancelAnimationFrame(L.current),
						(L.current = null),
						I(100),
						P(!1)));
			};
			a.addEventListener(`message`, o);
			let s = {
				type: `init`,
				canvas: n,
				size: {
					w: Math.max(1, e.clientWidth || 600),
					h: Math.max(1, e.clientHeight || 400),
				},
				dpr: z(),
				props: B(),
				images: r || [],
			};
			a.postMessage(s, [n]);
			let c = new ResizeObserver(() => {
				let t = {
					type: `resize`,
					size: {
						w: Math.max(1, e.clientWidth || 600),
						h: Math.max(1, e.clientHeight || 400),
					},
					dpr: z(),
				};
				a.postMessage(t);
			});
			return (
				c.observe(e),
				(M.current = c),
				() => {
					(c.disconnect(),
						a.removeEventListener(`message`, o),
						a.terminate(),
						URL.revokeObjectURL(i),
						(e.innerHTML = ``));
				}
			);
		}, []),
		n(() => {
			let e = j.current;
			if (!e) return;
			let t = { type: `props`, props: B() };
			e.postMessage(t);
		}, [c, l, u, d, f, m, g, _, v, y, b, x, S, C, w, T, E, D, O, k]),
		n(() => {
			let e = j.current;
			if (!e) return;
			r && r.length > 0 ? (P(!0), I(1)) : (P(!1), I(100));
			let t = { type: `images`, images: r || [] };
			e.postMessage(t);
		}, [r]),
		s(`div`, {
			style: {
				width: `100%`,
				height: `100%`,
				position: `relative`,
				overflow: `visible`,
			},
			children: [
				a(`div`, { ref: A, style: { position: `absolute`, inset: 0 } }),
				N &&
					a(`div`, {
						"aria-live": `polite`,
						style: {
							position: `absolute`,
							inset: 0,
							display: `grid`,
							placeItems: `center`,
							pointerEvents: `none`,
							background: `transparent`,
							fontFamily: `Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
							fontWeight: 400,
							fontSize: 12,
							color: `#262626`,
							lineHeight: 1,
							userSelect: `none`,
							textRendering: `optimizeLegibility`,
						},
						children: a(`span`, {
							children: `Loading: ${Math.max(0, Math.min(100, Math.round(F)))}%`,
						}),
					}),
			],
		})
	);
}
var h,
	g = e(() => {
		(l(),
			c(),
			r(),
			d(),
			(h = `https://unpkg.com/three@0.160.0/build/three.module.js`),
			u(m, {
				stopMotionInEditor: {
					type: f.Boolean,
					title: `Stop Motion in Editor`,
					defaultValue: !1,
				},
				images: {
					type: f.Array,
					title: `Images`,
					propertyControl: { type: f.Image },
				},
				count: {
					type: f.Number,
					title: `Count`,
					min: 2,
					max: 200,
					step: 1,
				},
				scrollSpeed: {
					type: f.Number,
					title: `Scroll`,
					min: -2,
					max: 2,
					step: 0.01,
				},
				spinDeg: {
					type: f.Number,
					title: `Spin °/s`,
					min: 0,
					max: 180,
					step: 0.5,
				},
				phaseStepDeg: {
					type: f.Number,
					title: `Phase °`,
					min: 0,
					max: 90,
					step: 0.5,
				},
				spacing: {
					type: f.Number,
					title: `Spacing`,
					min: 24,
					max: 300,
					step: 1,
				},
				cardW: {
					type: f.Number,
					title: `Card W`,
					min: 40,
					max: 600,
					step: 1,
				},
				cardH: {
					type: f.Number,
					title: `Card H`,
					min: 40,
					max: 800,
					step: 1,
				},
				radius: {
					type: f.Number,
					title: `Radius`,
					min: 0,
					max: 200,
					step: 1,
				},
				curveAmp: {
					type: f.Number,
					title: `Curve Amp`,
					min: 0,
					max: 400,
					step: 1,
				},
				angleDeg: {
					type: f.Number,
					title: `Angle°`,
					min: -45,
					max: 45,
					step: 1,
				},
				tiltYdeg: {
					type: f.Number,
					title: `Tilt Y°`,
					min: -60,
					max: 60,
					step: 0.5,
				},
				camYawDeg: {
					type: f.Number,
					title: `Cam Yaw°`,
					min: -180,
					max: 180,
					step: 1,
				},
				camPitchDeg: {
					type: f.Number,
					title: `Cam Pitch°`,
					min: -85,
					max: 85,
					step: 1,
				},
				camRollDeg: {
					type: f.Number,
					title: `Cam Roll°`,
					min: -180,
					max: 180,
					step: 1,
				},
				camDist: {
					type: f.Number,
					title: `Cam Dist`,
					min: 200,
					max: 3e3,
					step: 10,
				},
				camFovDeg: {
					type: f.Number,
					title: `Cam FOV°`,
					min: 10,
					max: 90,
					step: 1,
				},
				camTargetX: {
					type: f.Number,
					title: `Target X`,
					min: -2e3,
					max: 2e3,
					step: 1,
				},
				camTargetY: {
					type: f.Number,
					title: `Target Y`,
					min: -2e3,
					max: 2e3,
					step: 1,
				},
				camTargetZ: {
					type: f.Number,
					title: `Target Z`,
					min: -2e3,
					max: 2e3,
					step: 1,
				},
			}));
	});
export { g as n, m as t };
//# sourceMappingURL=TwistGallery.BdHZOo8V.mjs.map
