# Core JavaScript Foundations Notes

<details>
<summary>📌 Introduction to JavaScript & Setting Up Environments</summary>

### 📝 Learning Outcome

Reviewed what JavaScript is, where it runs (browser + Node.js), and re-confirmed my VS Code + browser console setup.

### 📚 Notes

-   JavaScript runs in browsers and on servers (Node.js).
-   Successfully setup and installed VS Code.
-   Reviewed difference between `<script>` in `<head>` vs before `</body>`.
-   Discovered `defer` waits for DOM to load before running scripts.

### 🧠 Key Challenges

-   Remembering why scripts sometimes fail if placed in `<head>` without `defer`.
-   Understanding the purpose of `async` vs `defer` for script loading.

### ✅ My Takeaway

Revisiting the setup process ensured my environment is ready for hands-on practice and future projects.

</details>

---

<details>
<summary>📌 Variables & Data Types</summary>

### 📝 Learning Outcome

Reviewed variable declarations using let and const, reinforced the difference between primitive and reference types, and clarified how pass-by-value works.

### 📚 Notes

-   Variables store data in JavaScript.
-   `let` and `const` are used to declare variables.
    -   Use `const` for values that shouldn’t be reassigned.
    -   Use `let` when reassignment is needed.
-   **Primitive data types:**
    -   `String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`
    -   Stored in **stack memory** and **copied by value** (safe to reassign).
-   **Reference (non-primitive) data types:**
    -   `Object`, `Array`, `Function`
    -   Stored in **heap memory** and **copied by reference** — changes affect the original.

#### 🚦 Pass-by-Value (Primitive)

When you assign a primitive value to another variable, JavaScript makes a copy.  
Changing the new variable does **not** affect the original.

```javascript
let a = 100;
let b = 200;

a = b;

console.log(a); // 200 (but b stays 200 too — they are separate)
```

#### 🛠 JavaScript Engine Steps

When JS sees a line of code, it does:

-   **Tokenizing** → breaks code into small pieces (words, symbols)
-   **Parsing** → builds a blueprint (syntax tree)
-   **Interpreting** → runs the code line by line

**Memory Hook:** **Read → Understand → Do**

### 🧠 Key Challenges

-   Visualizing how stack vs heap memory works.
-   Remembering that objects/arrays are **references** — changing one affects the original.
-   Getting used to `const` meaning the reference is fixed, but the contents can still change.

### ✅ My Takeaway

Strengthened my understanding of variable behavior, especially how primitives are copied by value and reference types point to the same memory location. This will help me avoid subtle bugs when working with objects and arrays.
