/* Full question bank for the app.
   Each topic contains 10 questions with difficulty levels.
   Difficulty distribution: 50% easy (5), 30% moderate (3), 20% difficult (2)
   Each question includes:
   - q: Question text
   - options: Multiple choice options
   - correct: Index of correct option
   - explanation: Displayed after answering
   - difficulty: easy, moderate, or difficult
*/

const questionBank = {
    algebra: [
        {
            q: "If $x^2 - 5x + 6 = 0$, what are the roots?",
            options: ["x = 2, 3", "x = 1, 6", "x = -2, -3", "x = 2, -3"],
            correct: 0,
            explanation: "Factoring: $(x-2)(x-3) = 0$, so $x = 2$ or $x = 3$",
            difficulty: "easy"
        },
        {
            q: "Solve: $2x + 5 = 3x - 7$",
            options: ["x = 12", "x = -12", "x = 2", "x = -2"],
            correct: 0,
            explanation: "$2x - 3x = -7 - 5 \\implies -x = -12 \\implies x = 12$",
            difficulty: "easy"
        },
        {
            q: "If $\\log_2(x) = 5$, find x",
            options: ["32", "10", "25", "16"],
            correct: 0,
            explanation: "$\\log_2(x) = 5$ means $2^5 = x$, so $x = 32$",
            difficulty: "easy"
        },
        {
            q: "What is the sum of roots of $x^2 - 7x + 12 = 0$?",
            options: ["7", "-7", "12", "-12"],
            correct: 0,
            explanation: "For $ax^2 + bx + c = 0$, sum of roots = $-b/a = -(-7)/1 = 7$",
            difficulty: "easy"
        },
        {
            q: "Simplify: $(x^3)^5$",
            options: ["$x^{15}$", "$x^8$", "$x^{25}$", "$x^{35}$"],
            correct: 0,
            explanation: "Using power rule: $(x^3)^5 = x^{(3\\cdot5)} = x^{15}$",
            difficulty: "easy"
        },
        {
            q: "If $3^x = 27$, what is x?",
            options: ["3", "9", "27", "1"],
            correct: 0,
            explanation: "Since $27 = 3^3$, we have $3^x = 3^3$, therefore $x = 3$",
            difficulty: "moderate"
        },
        {
            q: "Solve for x: $|2x - 4| = 6$",
            options: ["x = 5 or x = -1", "x = 5", "x = -1", "x = 2 or x = -2"],
            correct: 0,
            explanation: "$2x - 4 = 6$ gives $x = 5$, and $2x - 4 = -6$ gives $x = -1$",
            difficulty: "moderate"
        },
        {
            q: "The expression $x^2 - y^2$ can be factored as:",
            options: ["$(x + y)(x - y)$", "$(x - y)^2$", "$(x + y)^2$", "$x(x - y^2)$"],
            correct: 0,
            explanation: "This is the difference of squares: $x^2 - y^2 = (x + y)(x - y)$",
            difficulty: "moderate"
        },
        {
            q: "If $f(x) = 2x + 3$, what is $f^{-1}(x)$?",
            options: ["$(x - 3)/2$", "$(x + 3)/2$", "$2x - 3$", "$x/2 - 3$"],
            correct: 0,
            explanation: "Let $y = 2x + 3$, solve for x: $x = (y - 3)/2$, so $f^{-1}(x) = (x - 3)/2$",
            difficulty: "difficult"
        },
        {
            q: "Find the remainder when $x^3 - 2x^2 + x - 1$ is divided by $(x - 2)$",
            options: ["1", "0", "-1", "3"],
            correct: 0,
            explanation: "Using remainder theorem: $f(2) = 2^3 - 2(2^2) + 2 - 1 = 8 - 8 + 2 - 1 = 1$",
            difficulty: "difficult"
        }
    ],
    trigonometry: [
        {
            q: "What is $\\sin^2\\theta + \\cos^2\\theta$ equal to?",
            options: ["1", "0", "2", "$\\sin(2\\theta)$"],
            correct: 0,
            explanation: "This is the fundamental trigonometric identity: $\\sin^2\\theta + \\cos^2\\theta = 1$",
            difficulty: "easy"
        },
        {
            q: "If $\\sin\\theta = 3/5$, find $\\cos\\theta$ (for $0^{\\circ} < \\theta < 90^{\\circ}$)",
            options: ["4/5", "3/4", "5/3", "5/4"],
            correct: 0,
            explanation: "Using $\\sin^2\\theta + \\cos^2\\theta = 1$: $(3/5)^2 + \\cos^2\\theta = 1 \\implies \\cos^2\\theta = 16/25 \\implies \\cos\\theta = 4/5$",
            difficulty: "easy"
        },
        {
            q: "What is $\\tan(45^{\\circ})$?",
            options: ["1", "$\\sqrt{3}$", "$1/\\sqrt{3}$", "0"],
            correct: 0,
            explanation: "At $45^{\\circ}$, $\\sin$ and $\\cos$ are equal, so $\\tan(45^{\\circ}) = \\sin/\\cos = 1$",
            difficulty: "easy"
        },
        {
            q: "$\\sin(90^{\\circ} - \\theta)$ is equal to?",
            options: ["$\\cos\\theta$", "$\\sin\\theta$", "$\\tan\\theta$", "$-\\cos\\theta$"],
            correct: 0,
            explanation: "This is a complementary angle identity: $\\sin(90^{\\circ} - \\theta) = \\cos\\theta$",
            difficulty: "easy"
        },
        {
            q: "What is the value of $\\cos(0^{\\circ})$?",
            options: ["1", "0", "-1", "undefined"],
            correct: 0,
            explanation: "At $0^{\\circ}$, the point on unit circle is (1, 0), so $\\cos(0^{\\circ}) = 1$",
            difficulty: "easy"
        },
        {
            q: "Find the value of $\\sin(60^{\\circ})$",
            options: ["$\\sqrt{3}/2$", "1/2", "1", "$\\sqrt{2}/2$"],
            correct: 0,
            explanation: "$\\sin(60^{\\circ}) = \\sqrt{3}/2$, this is a standard angle value",
            difficulty: "moderate"
        },
        {
            q: "If $\\tan(A) = 1/\\sqrt{3}$, find angle A ($0^{\\circ} < A < 90^{\\circ}$)",
            options: ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
            correct: 0,
            explanation: "$\\tan(30^{\\circ}) = 1/\\sqrt{3}$, so $A = 30^{\\circ}$",
            difficulty: "moderate"
        },
        {
            q: "Simplify: $\\sin(A + B) = $?",
            options: ["$\\sin A \\cos B + \\cos A \\sin B$", "$\\sin A + \\sin B$", "$\\sin A \\cos B$", "$\\cos A \\cos B$"],
            correct: 0,
            explanation: "This is the sine addition formula: $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$",
            difficulty: "moderate"
        },
        {
            q: "If $\\sin A = 1/2$ and $\\cos A = \\sqrt{3}/2$, find $\\sin(2A)$",
            options: ["$\\sqrt{3}/2$", "1/2", "1", "$\\sqrt{2}/2$"],
            correct: 0,
            explanation: "Using $\\sin(2A) = 2\\sin A \\cos A = 2(1/2)(\\sqrt{3}/2) = \\sqrt{3}/2$",
            difficulty: "difficult"
        },
        {
            q: "What is the period of $\\tan(x)$?",
            options: ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$4\\pi$"],
            correct: 0,
            explanation: "The tangent function repeats every $\\pi$ radians ($180^{\\circ}$)",
            difficulty: "difficult"
        }
    ],
    calculus: [
        {
            q: "What is $d/dx(x^3)$?",
            options: ["$3x^2$", "$x^4/4$", "$x^2$", "$3x$"],
            correct: 0,
            explanation: "Using power rule: $d/dx(x^n) = n\\cdot x^{n-1}$, so $d/dx(x^3) = 3x^2$",
            difficulty: "easy"
        },
        {
            q: "$\\int x^2 dx = $?",
            options: ["$x^3/3 + C$", "$2x + C$", "$x^2/2 + C$", "$x^4/4 + C$"],
            correct: 0,
            explanation: "Using integration rule: $\\int x^n dx = x^{n+1}/(n+1) + C$, so $\\int x^2 dx = x^3/3 + C$",
            difficulty: "easy"
        },
        {
            q: "What is $d/dx(\\sin x)$?",
            options: ["$\\cos x$", "$-\\cos x$", "$\\sin x$", "$-\\sin x$"],
            correct: 0,
            explanation: "The derivative of $\\sin x$ with respect to $x$ is $\\cos x$",
            difficulty: "easy"
        },
        {
            q: "Find $\\lim_{x\\to0} [\\sin(x)/x]$",
            options: ["1", "0", "$\\pi$", "undefined"],
            correct: 0,
            explanation: "This is a standard limit: $\\lim_{x\\to0} [\\sin(x)/x] = 1$",
            difficulty: "easy"
        },
        {
            q: "What is $d/dx(e^x)$?",
            options: ["$e^x$", "$x e^{x-1}$", "$\\ln(x)$", "x"],
            correct: 0,
            explanation: "The exponential function $e^x$ is special: its derivative is itself, $e^x$",
            difficulty: "easy"
        },
        {
            q: "Find $d/dx(\\ln x)$",
            options: ["$1/x$", "x", "$\\ln x$", "$e^x$"],
            correct: 0,
            explanation: "The derivative of natural logarithm $\\ln x$ is $1/x$",
            difficulty: "moderate"
        },
        {
            q: "$\\int (1/x) dx = $?",
            options: ["$\\ln|x| + C$", "$x^2 + C$", "$1/x^2 + C$", "$-1/x^2 + C$"],
            correct: 0,
            explanation: "The integral of $1/x$ is $\\ln|x| + C$ (natural logarithm of absolute value of x)",
            difficulty: "moderate"
        },
        {
            q: "Using chain rule, $d/dx(\\sin(2x)) = $?",
            options: ["$2\\cos(2x)$", "$\\cos(2x)$", "$2\\sin(2x)$", "$-2\\cos(2x)$"],
            correct: 0,
            explanation: "Chain rule: $d/dx(\\sin(2x)) = \\cos(2x) \\cdot 2 = 2\\cos(2x)$",
            difficulty: "moderate"
        },
        {
            q: "Find the derivative of $x\\ln(x)$",
            options: ["$\\ln(x) + 1$", "$1/x$", "$\\ln(x)$", "$x/\\ln(x)$"],
            correct: 0,
            explanation: "Using product rule: $d/dx(x\\ln x) = 1\\cdot\\ln x + x\\cdot(1/x) = \\ln x + 1$",
            difficulty: "difficult"
        },
        {
            q: "Evaluate $\\int_0^1 x e^x dx$ using integration by parts",
            options: ["1", "$e - 1$", "$e$", "0"],
            correct: 0,
            explanation: "Using integration by parts with $u = x, dv = e^x dx$: $\\int x e^x dx = x e^x - e^x$. Evaluating from 0 to 1 gives 1",
            difficulty: "difficult"
        }
    ],
    geometry: [
        {
            q: "Sum of interior angles of a triangle is:",
            options: ["$180^{\\circ}$", "$360^{\\circ}$", "$90^{\\circ}$", "$270^{\\circ}$"],
            correct: 0,
            explanation: "The sum of all interior angles in any triangle is always $180^{\\circ}$",
            difficulty: "easy"
        },
        {
            q: "Area of a circle with radius r is:",
            options: ["$\\pi r^2$", "$2\\pi r$", "$\\pi r$", "$4\\pi r^2$"],
            correct: 0,
            explanation: "The formula for the area of a circle is $A = \\pi r^2$",
            difficulty: "easy"
        },
        {
            q: "In a right triangle, if legs are 3 and 4, hypotenuse is:",
            options: ["5", "7", "6", "25"],
            correct: 0,
            explanation: "Using Pythagorean theorem: $3^2 + 4^2 = 9 + 16 = 25$, so hypotenuse = $\\sqrt{25} = 5$",
            difficulty: "easy"
        },
        {
            q: "Volume of a cube with side 'a' is:",
            options: ["$a^3$", "$6a^2$", "$a^2$", "$4a$"],
            correct: 0,
            explanation: "Volume of cube = side $\\times$ side $\\times$ side = $a^3$",
            difficulty: "easy"
        },
        {
            q: "Diagonals of a parallelogram:",
            options: ["Bisect each other", "Are equal", "Are perpendicular", "None"],
            correct: 0,
            explanation: "A key property of parallelograms is that their diagonals bisect each other",
            difficulty: "easy"
        },
        {
            q: "The circumference of a circle with diameter d is:",
            options: ["$\\pi d$", "$2\\pi d$", "$\\pi d^2$", "$d^2/\\pi$"],
            correct: 0,
            explanation: "Circumference = $\\pi d$ or $2\\pi r$, where d is diameter and r is radius",
            difficulty: "moderate"
        },
        {
            q: "Area of a triangle with base b and height h is:",
            options: ["$(1/2)bh$", "$bh$", "$2bh$", "$b^2h$"],
            correct: 0,
            explanation: "The formula for area of a triangle is $A = (1/2) \\times$ base $\\times$ height",
            difficulty: "moderate"
        },
        {
            q: "In a regular hexagon, each interior angle is:",
            options: ["$120^{\\circ}$", "$108^{\\circ}$", "$90^{\\circ}$", "$135^{\\circ}$"],
            correct: 0,
            explanation: "Interior angle = $(n-2)\\times 180^{\\circ}/n$. For hexagon $(n=6)$: $(6-2)\\times 180^{\\circ}/6 = 120^{\\circ}$",
            difficulty: "moderate"
        },
        {
            q: "Surface area of a sphere with radius r is:",
            options: ["$4\\pi r^2$", "$\\pi r^2$", "$2\\pi r^2$", "$(4/3)\\pi r^3$"],
            correct: 0,
            explanation: "The surface area of a sphere is $4\\pi r^2$",
            difficulty: "difficult"
        },
        {
            q: "Two circles of radii 3 and 4 are externally tangent. Distance between centers is:",
            options: ["7", "1", "5", "12"],
            correct: 0,
            explanation: "When circles are externally tangent, distance between centers $= r_1 + r_2 = 3 + 4 = 7$",
            difficulty: "difficult"
        }
    ],
    probability: [
        {
            q: "What is the probability of getting heads when flipping a fair coin?",
            options: ["1/2", "1", "0", "2"],
            correct: 0,
            explanation: "A fair coin has 2 equally likely outcomes (heads or tails), so $P(\\text{heads}) = 1/2$",
            difficulty: "easy"
        },
        {
            q: "A die is rolled once. What is $P(\\text{getting 6})$?",
            options: ["1/6", "1/3", "1/2", "6"],
            correct: 0,
            explanation: "A die has 6 faces numbered 1-6, each equally likely. $P(6) = 1/6$",
            difficulty: "easy"
        },
        {
            q: "If $P(A) = 0.3$ and $P(B) = 0.4$, what is $P(\\text{not } A)$?",
            options: ["0.7", "0.6", "0.3", "0.1"],
            correct: 0,
            explanation: "$P(\\text{not } A) = 1 - P(A) = 1 - 0.3 = 0.7$",
            difficulty: "easy"
        },
        {
            q: "A bag has 3 red and 2 blue balls. Probability of drawing a red ball is:",
            options: ["3/5", "2/5", "1/2", "3/2"],
            correct: 0,
            explanation: "Total balls = 5, red balls = 3. $P(\\text{red}) = 3/5$",
            difficulty: "easy"
        },
        {
            q: "In a deck of 52 cards, probability of drawing an ace is:",
            options: ["1/13", "1/52", "4/52", "1/4"],
            correct: 0,
            explanation: "There are 4 aces in 52 cards. $P(\\text{ace}) = 4/52 = 1/13$",
            difficulty: "easy"
        },
        {
            q: "Two dice are rolled. Probability of getting sum 7 is:",
            options: ["1/6", "1/12", "1/36", "7/36"],
            correct: 0,
            explanation: "Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 out of 36. $P = 6/36 = 1/6$",
            difficulty: "moderate"
        },
        {
            q: "If two events A and B are independent with $P(A) = 0.3$, $P(B) = 0.4$, find $P(A \\text{ and } B)$:",
            options: ["0.12", "0.7", "0.4", "0.3"],
            correct: 0,
            explanation: "For independent events: $P(A \\text{ and } B) = P(A) \\times P(B) = 0.3 \\times 0.4 = 0.12$",
            difficulty: "moderate"
        },
        {
            q: "A box has 5 defective and 15 good items. Two items drawn without replacement. $P(\\text{both good}) = $?",
            options: ["21/38", "9/16", "3/4", "15/20"],
            correct: 0,
            explanation: "$P(\\text{1st good}) \\times P(\\text{2nd good|1st good}) = (15/20) \\times (14/19) = 210/380 = 21/38$",
            difficulty: "moderate"
        },
        {
            q: "In a normal distribution, approximately what % of data lies within 2 standard deviations?",
            options: ["95%", "68%", "99.7%", "50%"],
            correct: 0,
            explanation: "Empirical rule: $\\sim 68\\%$ within $1\\sigma$, $\\sim 95\\%$ within $2\\sigma$, $\\sim 99.7\\%$ within $3\\sigma$",
            difficulty: "difficult"
        },
        {
            q: "Using Bayes' theorem, if $P(A|B) = 0.8$, $P(B) = 0.3$, $P(A) = 0.5$, find $P(B|A)$:",
            options: ["0.48", "0.8", "0.3", "0.24"],
            correct: 0,
            explanation: "Bayes: $P(B|A) = P(A|B)P(B)/P(A) = 0.8\\times 0.3/0.5 = 0.24/0.5 = 0.48$",
            difficulty: "difficult"
        }
    ],
    vectors: [
        {
            q: "If vector $\\mathbf{a} = (2, 3)$ and $\\mathbf{b} = (1, 4)$, find $\\mathbf{a} + \\mathbf{b}$:",
            options: ["(3, 7)", "(1, 1)", "(2, 12)", "(3, 12)"],
            correct: 0,
            explanation: "Vector addition: $(2+1, 3+4) = (3, 7)$",
            difficulty: "easy"
        },
        {
            q: "The magnitude of vector (3, 4) is:",
            options: ["5", "7", "12", "25"],
            correct: 0,
            explanation: "Magnitude = $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$",
            difficulty: "easy"
        },
        {
            q: "If vector $\\mathbf{a} = (2, -1)$, find $3\\mathbf{a}$:",
            options: ["(6, -3)", "(5, 2)", "(6, 3)", "(2, -3)"],
            correct: 0,
            explanation: "Scalar multiplication: $3(2, -1) = (3\\times 2, 3\\times (-1)) = (6, -3)$",
            difficulty: "easy"
        },
        {
            q: "The zero vector is represented as:",
            options: ["(0, 0)", "(1, 0)", "(0, 1)", "undefined"],
            correct: 0,
            explanation: "Zero vector has all components equal to zero: (0, 0) in 2D",
            difficulty: "easy"
        },
        {
            q: "Unit vector in the direction of (3, 0) is:",
            options: ["(1, 0)", "(3, 0)", "(0, 1)", "(1, 1)"],
            correct: 0,
            explanation: "Magnitude = 3, so unit vector = $(3/3, 0/3) = (1, 0)$",
            difficulty: "easy"
        },
        {
            q: "Dot product of $\\mathbf{a} = (2, 3)$ and $\\mathbf{b} = (4, 1)$ is:",
            options: ["11", "8", "7", "14"],
            correct: 0,
            explanation: "$\\mathbf{a}\\cdot\\mathbf{b} = (2\\times 4) + (3\\times 1) = 8 + 3 = 11$",
            difficulty: "moderate"
        },
        {
            q: "If $|\\mathbf{a}| = 5$ and $|\\mathbf{b}| = 3$, what is the maximum value of $|\\mathbf{a} + \\mathbf{b}|$?",
            options: ["8", "5", "3", "15"],
            correct: 0,
            explanation: "By triangle inequality, $|\\mathbf{a} + \\mathbf{b}| \\le |\\mathbf{a}| + |\\mathbf{b}|$, max value = $5 + 3 = 8$",
            difficulty: "moderate"
        },
        {
            q: "Angle between vectors $\\mathbf{a} = (1, 0)$ and $\\mathbf{b} = (0, 1)$ is:",
            options: ["$90^{\\circ}$", "$45^{\\circ}$", "$0^{\\circ}$", "$180^{\\circ}$"],
            correct: 0,
            explanation: "These are perpendicular unit vectors ($\\mathbf{i}$ and $\\mathbf{j}$), so angle = $90^{\\circ}$",
            difficulty: "moderate"
        },
        {
            q: "If $\\mathbf{a}\\cdot\\mathbf{b} = 0$ and both vectors are non-zero, then:",
            options: ["Vectors are perpendicular", "Vectors are parallel", "Vectors are equal", "$\\mathbf{a} = 0$"],
            correct: 0,
            explanation: "When dot product is zero, vectors are orthogonal (perpendicular)",
            difficulty: "difficult"
        },
        {
            q: "Find projection of $\\mathbf{a} = (3, 4)$ on $\\mathbf{b} = (1, 0)$:",
            options: ["3", "4", "5", "7"],
            correct: 0,
            explanation: "Projection = $(\\mathbf{a}\\cdot\\mathbf{b})/|\\mathbf{b}| = [(3\\times 1)+(4\\times 0)]/1 = 3/1 = 3$",
            difficulty: "difficult"
        }
    ],
    matrices: [
        {
            q: "What is the order of matrix $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$?",
            options: ["$2\\times 3$", "$3\\times 2$", "$2\\times 2$", "$3\\times 3$"],
            correct: 0,
            explanation: "Matrix has 2 rows and 3 columns, so order is $2\\times 3$",
            difficulty: "easy"
        },
        {
            q: "The identity matrix of order $2\\times 2$ is:",
            options: ["$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Identity matrix has 1s on diagonal and 0s elsewhere: $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
            difficulty: "easy"
        },
        {
            q: "What is the transpose of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$?",
            options: ["$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Transpose interchanges rows and columns: $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$",
            difficulty: "easy"
        },
        {
            q: "The determinant of $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$ is:",
            options: ["6", "5", "0", "1"],
            correct: 0,
            explanation: "For diagonal matrix, det = product of diagonal elements $= 2\\times 3 = 6$",
            difficulty: "easy"
        },
        {
            q: "A square matrix A is symmetric if:",
            options: ["$A = A^T$", "$A = -A^T$", "$A = A^{-1}$", "$\\det(A) = 0$"],
            correct: 0,
            explanation: "A matrix is symmetric when it equals its transpose: $A = A^T$",
            difficulty: "easy"
        },
        {
            q: "Find determinant of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$:",
            options: ["-2", "2", "10", "0"],
            correct: 0,
            explanation: "det = $(1\\times 4) - (2\\times 3) = 4 - 6 = -2$",
            difficulty: "moderate"
        },
        {
            q: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}$, find $A + B$:",
            options: ["$\\begin{pmatrix} 3 & 2 \\\\ 4 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 2 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 4 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 4 & 8 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Add corresponding elements: $\\begin{pmatrix} 1+2 & 2+0 \\\\ 3+1 & 4+2 \\end{pmatrix} = \\begin{pmatrix} 3 & 2 \\\\ 4 & 6 \\end{pmatrix}$",
            difficulty: "moderate"
        },
        {
            q: "For matrix multiplication AB to be defined, if A is $m\\times n$, B must be:",
            options: ["$n\\times p$", "$m\\times p$", "$p\\times n$", "$p\\times m$"],
            correct: 0,
            explanation: "Number of columns in A must equal number of rows in B, so B is $n\\times p$",
            difficulty: "moderate"
        },
        {
            q: "Find inverse of $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$:",
            options: ["$\\begin{pmatrix} 1/2 & 0 \\\\ 0 & 1/3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 2 \\\\ 3 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"],
            correct: 0,
            explanation: "For diagonal matrix, inverse has reciprocals on diagonal: $\\begin{pmatrix} 1/2 & 0 \\\\ 0 & 1/3 \\end{pmatrix}$",
            difficulty: "difficult"
        },
        {
            q: "If $A^2 = A$, matrix A is called:",
            options: ["Idempotent", "Orthogonal", "Nilpotent", "Involutory"],
            correct: 0,
            explanation: "A matrix satisfying $A^2 = A$ is called idempotent",
            difficulty: "difficult"
        }
    ],
    statistics: [
        {
            q: "Mean of 2, 4, 6, 8, 10 is:",
            options: ["6", "5", "7", "8"],
            correct: 0,
            explanation: "Mean = $(2+4+6+8+10)/5 = 30/5 = 6$",
            difficulty: "easy"
        },
        {
            q: "Median of 1, 3, 5, 7, 9 is:",
            options: ["5", "3", "7", "4"],
            correct: 0,
            explanation: "For odd number of values, median is the middle value = 5",
            difficulty: "easy"
        },
        {
            q: "Mode of 2, 3, 3, 4, 5, 5, 5, 6 is:",
            options: ["5", "3", "4", "No mode"],
            correct: 0,
            explanation: "Mode is the most frequent value, which is 5 (appears 3 times)",
            difficulty: "easy"
        },
        {
            q: "Range of data 10, 15, 20, 25, 30 is:",
            options: ["20", "30", "10", "25"],
            correct: 0,
            explanation: "Range = Maximum - Minimum = $30 - 10 = 20$",
            difficulty: "easy"
        },
        {
            q: "If all values in a dataset are the same, the standard deviation is:",
            options: ["0", "1", "Mean", "undefined"],
            correct: 0,
            explanation: "No variation means standard deviation = 0",
            difficulty: "easy"
        },
        {
            q: "Variance of 2, 4, 6 is:",
            options: ["8/3", "4", "2", "4/3"],
            correct: 0,
            explanation: "Mean = 4. Variance = $[(2-4)^2+(4-4)^2+(6-4)^2]/3 = [4+0+4]/3 = 8/3$",
            difficulty: "moderate"
        },
        {
            q: "In a normal distribution, mean = median = ?",
            options: ["Mode", "Range", "Variance", "0"],
            correct: 0,
            explanation: "In a perfectly normal distribution, mean = median = mode",
            difficulty: "moderate"
        },
        {
            q: "Coefficient of variation (CV) is calculated as:",
            options: ["$(\\sigma/\\mu)\\times 100$", "$\\sigma^2$", "$\\sigma/\\mu$", "$\\sigma+\\mu$"],
            correct: 0,
            explanation: "CV = (Standard Deviation/Mean) $\\times 100 = (\\sigma/\\mu) \\times 100$",
            difficulty: "moderate"
        },
        {
            q: "For grouped data with class intervals, which measure uses class marks?",
            options: ["Mean", "Mode", "Range", "None"],
            correct: 0,
            explanation: "Mean for grouped data uses class marks (midpoints) with frequencies",
            difficulty: "difficult"
        },
        {
            q: "Pearson's correlation coefficient ranges from:",
            options: ["-1 to +1", "0 to 1", "$-\\infty$ to $+\\infty$", "0 to 100"],
            correct: 0,
            explanation: "Correlation coefficient $r$ always lies between -1 and +1",
            difficulty: "difficult"
        }
    ]
};
module.exports = questionBank;