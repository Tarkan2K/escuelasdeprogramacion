export const lessons = [
    // ===========================================================================
    // MÓDULO 0: INTRODUCCIÓN E INFRAESTRUCTURA
    // ===========================================================================
    {
        id: 1,
        title: "0.1: Introducción a C++ y el Estándar",
        phase: "Módulo 0: Introducción",
        description: "Historia, filosofía de diseño, estandarización ISO y el modelo de abstracción de costo cero.",
        content: `
# 1. La Filosofía de C++
C++ es un lenguaje de programación de propósito general creado por Bjarne Stroustrup como una extensión del lenguaje C, o "C with Classes". Está diseñado con un sesgo hacia la programación de sistemas y software embebido o con recursos limitados, destacando por su rendimiento, eficiencia y flexibilidad.

La filosofía central de C++ moderno se resume en las **C++ Core Guidelines**:
1.  **Expresar ideas directamente en código**: El lenguaje debe permitirte declarar *qué* quieres hacer, no solo *cómo* hacerlo.
2.  **Abstracción de Costo Cero (Zero-overhead abstraction)**: No debes pagar por características que no usas. Las abstracciones de alto nivel deben ser tan eficientes como el código de bajo nivel escrito a mano.
3.  **Seguridad de Tipos Estática**: Idealmente, el compilador debe atrapar los errores antes de que el programa se ejecute.

> "C++ está diseñado para permitirte expresar ideas de forma directa y concisa." - Bjarne Stroustrup

# 2. El Proceso de Compilación
A diferencia de lenguajes interpretados (como Python o JavaScript), C++ es un **lenguaje compilado**. Esto significa que tu código fuente legible por humanos debe ser traducido a código máquina que el procesador pueda ejecutar. Este proceso ocurre en tres etapas principales:

1.  **Preprocesamiento**: El preprocesador maneja directivas que comienzan con \`#\` (como \`#include\`). Esencialmente copia y pega texto, preparando el archivo fuente para el compilador.
2.  **Compilación**: El compilador traduce el código C++ preprocesado a una forma intermedia llamada **código objeto** (\`.o\` o \`.obj\`). Aquí es donde se detectan los errores de sintaxis.
3.  **Enlazado (Linking)**: El enlazador toma todos los archivos objeto y librerías y los combina en un único binario **ejecutable**. Resuelve las referencias entre diferentes partes de tu programa.

# 3. Anatomía de un Programa en C++
Todo programa en C++ debe tener exactamente un punto de entrada: la función \`main\`.

\`\`\`cpp
#include <iostream> // Directiva de preprocesador

// El punto de entrada del programa
int main() {
    // Flujo de Salida Estándar
    std::cout << "Hola, Mundo!" << std::endl; 
    
    return 0; // Estado de retorno al sistema operativo
}
\`\`\`

### Componentes Clave:
*   \`#include <iostream>\`: Le dice al preprocesador que incluya la librería de Flujo de Entrada/Salida Estándar. Nos permite imprimir texto en la consola.
*   \`int main()\`: Define la función principal. Retorna un entero (\`int\`) que representa el estado de salida del programa.
*   \`std::cout\`: Representa la "Salida de Caracteres Estándar". Vive dentro del espacio de nombres \`std\` (estándar).
*   \`<<\`: El operador de inserción. "Inserta" los datos de la derecha en el flujo de la izquierda.
*   \`return 0;\`: Un valor de retorno de \`0\` tradicionalmente significa "Éxito". Cualquier valor distinto de cero indica un error.

# 4. Estándares de C++ Moderno
C++ ha evolucionado significativamente. Este curso se centra en **C++ Moderno** (C++11, C++14, C++17, C++20 y C++23).
*   **C++98/03**: La era "Legada".
*   **C++11**: La revolución "Moderna". Añadió \`auto\`, punteros inteligentes, lambdas.
*   **C++14/17**: Refinamientos y nuevas características de la librería estándar.
*   **C++20**: Un gran salto adelante. Añadió Conceptos, Módulos, Corrutinas y Rangos.

Nos adheriremos estrictamente a las prácticas modernas, evitando construcciones obsoletas estilo C donde existan alternativas más seguras en C++.
    `,
        quiz: {
            question: "¿Qué significa el principio de 'Abstracción de Costo Cero'?",
            options: ["Las abstracciones no consumen memoria", "El uso de abstracciones de alto nivel no impone una penalización de rendimiento en tiempo de ejecución comparado con código manual de bajo nivel", "El compilador elimina todas las abstracciones", "No se debe pagar por usar el compilador"],
            correctAnswer: 1
        }
    },
    {
        id: 2,
        title: "0.2: El Modelo de Compilación",
        phase: "Módulo 0: Introducción",
        description: "Entendiendo cómo el código fuente se transforma en un binario ejecutable: Preprocesamiento, Compilación y Enlazado.",
        content: `
# El Modelo de Compilación de C++

C++ es único en su modelo de compilación, heredado de C. A diferencia de lenguajes modernos como Java o C# que compilan a bytecode, o Python que es interpretado, C++ compila directamente a código máquina nativo. Este proceso es secuencial y consta de cuatro etapas distintas.

## 1. Preprocesamiento
El preprocesador es una herramienta de "copiar y pegar" inteligente que se ejecuta antes que el compilador.
*   **Directivas**: Procesa todo lo que empieza con \`#\` (\`#include\`, \`#define\`, \`#ifdef\`).
*   **Inclusión**: Cuando haces \`#include <vector>\`, el preprocesador busca ese archivo y copia *todo* su contenido en tu archivo actual.
*   **Resultado**: Genera una **Unidad de Traducción**. Este es tu código fuente con todos los headers expandidos y sin comentarios.

## 2. Compilación
El compilador toma la Unidad de Traducción y la analiza.
*   **Análisis Sintáctico**: Verifica que el código cumpla con las reglas del lenguaje (puntos y comas, tipos de datos).
*   **Optimización**: El compilador intenta mejorar tu código (inlining, loop unrolling).
*   **Generación de Código**: Traduce el C++ a lenguaje ensamblador (Assembly) específico para tu CPU.

## 3. Ensamblado
El ensamblador convierte el código ensamblador en código máquina (binario).
*   **Resultado**: Un **Archivo Objeto** (\`.o\` en Linux, \`.obj\` en Windows).
*   Este archivo contiene instrucciones de máquina, pero no es ejecutable aún porque le faltan direcciones de memoria de funciones externas (como \`std::cout\`).

## 4. Enlazado (Linking)
El enlazador (Linker) es el paso final.
*   **Combinación**: Toma todos los archivos objeto (\`main.o\`, \`player.o\`) y las librerías estáticas.
*   **Resolución de Símbolos**: Si \`main.cpp\` llama a una función \`void Log()\` definida en \`utils.cpp\`, el enlazador conecta esa llamada con la definición real.
*   **Errores Comunes**:
    *   *Undefined reference*: Declaraste una función pero no la definiste (o no enlazaste el archivo objeto).
    *   *Multiple definition*: Definiste la misma función en dos lugares (violación de la One Definition Rule).

> **Concepto Clave**: Cada archivo \`.cpp\` se compila por separado en su propio archivo objeto. El enlazador es el único que "ve" todo el proyecto junto.
        `,
        quiz: {
            question: "Si obtienes un error 'Undefined reference to function X', ¿en qué etapa falló el proceso?",
            options: ["Preprocesamiento", "Compilación", "Enlazado (Linking)", "Ejecución"],
            correctAnswer: 2
        }
    },

    // ===========================================================================
    // MÓDULO 1: FUNDAMENTOS DEL LENGUAJE
    // ===========================================================================
    {
        id: 3,
        title: "1.1: La Función Main",
        phase: "Módulo 1: Fundamentos",
        description: "El punto de entrada de todo programa C++: Firmas estándar, códigos de retorno y argumentos.",
        content: `
# La Función Main

Todo programa en C++ debe tener **exactamente una** función global llamada \`main\`. Es el punto de entrada designado donde el sistema operativo transfiere el control al programa.

## 1. La Firma Estándar
Según el estándar ISO C++, existen dos firmas válidas para \`main\`:

\`\`\`cpp
int main() { ... }
int main(int argc, char* argv[]) { ... }
\`\`\`

### Desglose de Componentes:
*   **\`int\` (Tipo de Retorno)**: La función \`main\` **debe** retornar un entero. Este valor se devuelve al sistema operativo al finalizar el programa.
    *   \`0\`: Indica ejecución exitosa (EXIT_SUCCESS).
    *   Cualquier otro valor (usualmente \`1\` o \`-1\`): Indica un error.
*   **\`main\` (Identificador)**: Es un nombre reservado para la función de inicio.
Si llamas a \`conectarBaseDeDatos();\` sin capturar su resultado, el compilador generará una advertencia, ayudando a prevenir bugs silenciosos.
    `,
        quiz: {
            question: "¿Cuál es el tipo de retorno obligatorio de la función main según el estándar ISO C++?",
            options: ["void", "int", "float", "bool"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Escribe una función main mínima válida que retorne explícitamente el código de error -1.",
            initialCode: "",
            expectedRegex: /int\s+main\s*\(\s*\)\s*\{\s*return\s+-1\s*;\s*\}/,
            solution: "int main() { return -1; }"
        }
    },
    {
        id: 4,
        title: "1.2: Comentarios y Documentación Técnica",
        phase: "Módulo 1: Fundamentos",
        description: "Sintaxis de comentarios y estándares de documentación (Doxygen).",
        content: `
# 1. Comentarios Sintácticos

El compilador ignora completamente los comentarios; son eliminados durante la fase de análisis léxico (antes del preprocesamiento completo). Existen dos tipos:

*   **Comentario de Línea (\`//\`)**: Todo lo que sigue a \`//\` hasta el final de la línea es ignorado.
*   **Comentario de Bloque (\`/* ... */\`)**: Todo lo que está entre los delimitadores es ignorado. No pueden anidarse.

# 2. Filosofía de Documentación

En ingeniería de software, el código se lee muchas más veces de las que se escribe. Los comentarios deben explicar el **POR QUÉ** (intención, restricciones, decisiones de diseño), no el **QUÉ** (lo cual debería ser evidente leyendo el código).

*   **Malo**: \`i++; // Incrementa i\` (Redundante).
*   **Bueno**: \`i++; // Avanzamos al siguiente byte del buffer de red\`.

# 3. Estándar Doxygen

En proyectos profesionales, se utiliza un formato estandarizado para documentar interfaces (APIs). Doxygen es el estándar de facto en C++. Utiliza bloques especiales que permiten generar documentación automática (HTML, PDF) y que los IDEs muestren ayuda contextual.

\`\`\`cpp
/**
 * @brief Calcula la raíz cuadrada de un número.
 * 
 * Utiliza el método de Newton-Raphson para la aproximación.
 * 
 * @param n El número de entrada. Debe ser no negativo.
 * @return La raíz cuadrada aproximada.
 * @throws std::domain_error Si n es negativo.
 */
double raiz(double n);
\`\`\`

El uso de etiquetas como \`@brief\`, \`@param\`, y \`@return\` proporciona una estructura clara y legible.
    `,
        quiz: {
            question: "¿Qué herramienta es el estándar industrial para generar documentación a partir de comentarios en C++?",
            options: ["Javadoc", "Doxygen", "Sphinx", "Man pages"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Escribe un comentario de línea simple.",
            initialCode: "",
            expectedRegex: /\/\/.*/,
            solution: "// Comentario"
        }
    },
    {
        id: 5,
        title: "1.3: Variables, Inicialización y Tipos Fundamentales",
        phase: "Módulo 1: Fundamentos",
        description: "Declaración, definición, inicialización uniforme y el sistema de tipos.",
        content: `
# 1. El Concepto de Variable

Una variable en C++ es una abstracción de una región de memoria. Tiene tres atributos principales:
1.  **Nombre (Identificador)**: Cómo nos referimos a ella.
2.  **Tipo**: Determina el tamaño en bytes, la interpretación de esos bytes (entero con signo, flotante, etc.) y las operaciones válidas.
3.  **Valor**: El contenido actual de la memoria.
4.  **Dirección**: La ubicación física en la memoria RAM (L-value).

# 2. Inicialización

C++ ofrece múltiples formas de inicializar variables, lo que puede ser confuso. La recomendación moderna es usar la **Inicialización Uniforme** (o de lista).

*   **Asignación (\`int x = 5;\`)**: Tradicional. Puede ser confuso si el tipo requiere conversión.
*   **Constructor (\`int x(5);\`)**: Sintaxis funcional.
*   **Uniforme (\`int x{5};\`)**: Introducida en C++11. Es la preferida porque **previene el estrechamiento (narrowing)**.

\`\`\`cpp
int x = 4.5;  // Compila (con warning), x vale 4. Pérdida de datos silenciosa.
int y{4.5};   // Error de compilación. El compilador protege la integridad de los datos.
\`\`\`

## Zero Initialization
Si usas llaves vacías, la variable se inicializa a cero (o su equivalente).
\`int z{}; // z es 0 garantizado.\`
Si declaras \`int z;\` (sin inicializar) dentro de una función, su valor es **indeterminado** (basura de la memoria), lo cual es una fuente común de bugs.

# 3. Inferencia de Tipos (auto)

La palabra clave \`auto\` (C++11) indica al compilador que deduzca el tipo de la variable basándose en su inicializador.

\`\`\`cpp
auto i = 10;    // i es int
auto d = 3.14;  // d es double
auto s = "Hola"; // s es const char*
\`\`\`

**AAA (Almost Always Auto)**: Es una filosofía moderna que sugiere usar \`auto\` siempre que sea posible para evitar conversiones accidentales y refactorizar más fácilmente, siempre que no comprometa la legibilidad.
    `,
        quiz: {
            question: "¿Qué ventaja ofrece la inicialización uniforme (int x{5}) sobre la asignación tradicional?",
            options: ["Es más rápida", "Previene conversiones de tipo con pérdida de datos (narrowing)", "Permite inicializar constantes", "Es compatible con C"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara una variable entera 'contador' inicializada a 0 usando inicialización uniforme (llaves).",
            initialCode: "",
            expectedRegex: /int\s+contador\s*\{\s*0\s*\}\s*;/,
            solution: "int contador{0};"
        }
    },
    {
        id: 6,
        title: "1.4: I/O Streams y Buffering",
        phase: "Módulo 1: Fundamentos",
        description: "Arquitectura de iostream, std::cout, std::cin y sincronización.",
        content: `
# 1. La Abstracción de Streams

C++ maneja la entrada/salida (I/O) como flujos de bytes secuenciales. La librería \`<iostream>\` define los objetos globales para interactuar con los dispositivos estándar.

*   **\`std::cout\` (Character Output)**: Flujo de salida estándar (usualmente la terminal).
*   **\`std::cin\` (Character Input)**: Flujo de entrada estándar (teclado).
*   **\`std::cerr\`**: Salida de errores (sin buffer).
*   **\`std::clog\`**: Salida de logs (con buffer).

# 2. Operadores de Inserción y Extracción

*   **\`<<\` (Inserción)**: Envía datos al flujo. \`std::cout << "Hola";\`.
*   **\`>>\` (Extracción)**: Extrae datos del flujo e intenta convertirlos al tipo de la variable destino. \`std::cin >> x;\`.

# 3. Buffering y Rendimiento

La escritura en disco o consola es una operación lenta comparada con la CPU. Para optimizar, \`std::cout\` utiliza un **buffer** en memoria. Los datos se acumulan en el buffer y solo se envían al dispositivo ("flushed") cuando:
1.  El buffer se llena.
2.  Se solicita explícitamente un flush.
3.  El programa termina.

## std::endl vs '\\n'
*   **\`\\n\`**: Simplemente inserta el carácter de nueva línea. Es rápido.
*   **\`std::endl\`**: Inserta una nueva línea **Y fuerza un flush del buffer**.

> **Optimización**: En bucles intensivos o I/O masivo, el uso de \`std::endl\` puede degradar severamente el rendimiento al forzar escrituras físicas constantes. Prefiera \`\\n\` a menos que necesite ver la salida inmediatamente (ej. debugging).

# 4. Sincronización con C

Por defecto, los streams de C++ están sincronizados con los de C (\`printf\`, \`scanf\`) para permitir mezclarlos. Esto impone una penalización de rendimiento. Si no usa funciones de C, puede desactivar esto para obtener I/O de alta velocidad (comparable a C):

\`\`\`cpp
std::ios::sync_with_stdio(false);
std::cin.tie(nullptr);
\`\`\`
    `,
        quiz: {
            question: "¿Por qué se recomienda usar '\\n' en lugar de std::endl en aplicaciones de alto rendimiento?",
            options: ["\\n es estándar POSIX", "std::endl fuerza un vaciado (flush) del buffer, lo cual es una operación costosa", "std::endl ocupa más memoria", "\\n es más legible"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Escribe una sentencia para leer un entero en la variable 'valor' usando cin.",
            initialCode: "int valor;\n",
            expectedRegex: /std::cin\s*>>\s*valor\s*;/,
            solution: "std::cin >> valor;"
        }
    },

    // ===========================================================================
    // MÓDULO 2: SISTEMA DE TIPOS Y MEMORIA
    // ===========================================================================
    {
        id: 7,
        title: "2.1: Bits, Bytes y Representación de Datos",
        phase: "Módulo 2: Tipos y Memoria",
        description: "Fundamentos de arquitectura de computadoras: Direccionamiento, Endianness y Padding.",
        content: `
# 1. La Unidad Mínima: El Byte

En C++, la unidad fundamental de memoria es el **byte**. Por definición del estándar, un \`char\` tiene un tamaño de 1 byte. En la inmensa mayoría de arquitecturas modernas, 1 byte = 8 bits (octeto), aunque el estándar permite bytes mayores (ver \`CHAR_BIT\` en \`<climits>\`).

Cada byte en memoria tiene una **dirección única** (address).

# 2. Endianness (Orden de Bytes)

Cuando un tipo de dato ocupa más de 1 byte (como un \`int\` de 4 bytes), el orden en que esos bytes se almacenan en memoria depende de la arquitectura del procesador.

Consideremos el entero hexadecimal \`0x12345678\` (305419896 en decimal). Ocupa 4 bytes: \`12\`, \`34\`, \`56\`, \`78\`.

*   **Big Endian (Redes, PowerPC)**: El byte más significativo (MSB) va primero (dirección más baja).
    *   \`Address 0x00: 12\`
    *   \`Address 0x01: 34\`
    *   \`Address 0x02: 56\`
    *   \`Address 0x03: 78\`
*   **Little Endian (x86, x64, ARM)**: El byte menos significativo (LSB) va primero.
    *   \`Address 0x00: 78\`
    *   \`Address 0x01: 56\`
    *   \`Address 0x02: 34\`
    *   \`Address 0x03: 12\`

> **Implicación**: Escribir un archivo binario en una máquina x64 y leerlo en una máquina Big Endian resultará en datos corruptos si no se maneja la conversión.

# 3. Alineación y Padding

El procesador no lee la memoria byte a byte, sino en "palabras" (words) de 4 u 8 bytes. Para optimizar el acceso, el compilador alinea las variables en direcciones que son múltiplos de su tamaño.

\`\`\`cpp
struct S {
    char c; // 1 byte
    // --- 3 bytes de PADDING oculto ---
    int i;  // 4 bytes
};
\`\`\`

Aunque \`char\` + \`int\` suman 5 bytes teóricos, \`sizeof(S)\` será 8 bytes. El compilador inserta "basura" (padding) para que \`int i\` comience en una dirección múltiplo de 4.
    `,
        quiz: {
            question: "¿Qué arquitectura almacena el byte menos significativo en la dirección de memoria más baja?",
            options: ["Big Endian", "Little Endian", "Middle Endian", "Network Byte Order"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Usa sizeof para obtener el tamaño en bytes de un 'long long'.",
            initialCode: "#include <iostream>\n",
            expectedRegex: /sizeof\s*\(\s*long\s+long\s*\)/,
            solution: "std::cout << sizeof(long long);"
        }
    },
    {
        id: 8,
        title: "2.2: Enteros: Signo y Desbordamiento",
        phase: "Módulo 2: Tipos y Memoria",
        description: "Tipos integrales, complemento a dos y comportamiento indefinido.",
        content: `
# 1. Tipos Enteros

C++ garantiza tamaños mínimos, pero no exactos (dependen de la implementación).

*   \`short\`: Mínimo 16 bits.
*   \`int\`: Mínimo 16 bits (usualmente 32).
*   \`long\`: Mínimo 32 bits (32 en Windows, 64 en Linux x64).
*   \`long long\`: Mínimo 64 bits.

Para precisión exacta, use \`<cstdint>\`: \`int32_t\`, \`uint64_t\`, etc.

# 2. Signed vs Unsigned

*   **Signed (con signo)**: Utiliza el bit más significativo como bit de signo. Representación estándar: **Complemento a Dos**.
*   **Unsigned (sin signo)**: Todos los bits representan magnitud. Rango: [0, 2^N - 1].

# 3. Overflow (Desbordamiento)

El comportamiento al exceder el rango de un entero es una de las áreas más peligrosas de C++.

*   **Unsigned Overflow**: Está **bien definido** por el estándar. Opera aritmética modular (wrap-around).
    *   \`uint8_t x = 255; x++;\` -> \`x\` se convierte en \`0\`.
*   **Signed Overflow**: Es **Undefined Behavior (UB)**.
    *   \`int x = INT_MAX; x++;\` -> El estándar no define qué sucede. El compilador puede asumir que esto nunca ocurre y eliminar ramas de código enteras durante la optimización, causando bugs catastróficos.

> **Regla de Oro**: Nunca confíe en el desbordamiento de enteros con signo. Use \`unsigned\` si necesita aritmética modular, o verifique los límites antes de operar.
    `,
        quiz: {
            question: "¿Cuál es el comportamiento de desbordar un entero CON signo (signed int)?",
            options: ["Vuelve a 0", "Se vuelve negativo (wrap-around)", "Lanza una excepción", "Comportamiento Indefinido (Undefined Behavior)"],
            correctAnswer: 3
        },
        codeChallenge: {
            instruction: "Declara un entero de exactamente 32 bits con signo usando el tipo moderno.",
            initialCode: "#include <cstdint>\n",
            expectedRegex: /int32_t\s+\w+/,
            solution: "int32_t x;"
        }
    },
    {
        id: 9,
        title: "2.3: Coma Flotante (IEEE 754)",
        phase: "Módulo 2: Tipos y Memoria",
        description: "Representación de reales, precisión y valores especiales (NaN, Inf).",
        content: `
# 1. El Estándar IEEE 754

C++ utiliza este estándar para \`float\` y \`double\`. Los números se almacenan como notación científica binaria:
\`Valor = Signo * Mantisa * 2^Exponente\`

*   **\`float\` (Single Precision)**: 32 bits. ~7 dígitos decimales significativos.
*   **\`double\` (Double Precision)**: 64 bits. ~15 dígitos decimales significativos.

# 2. Problemas de Precisión

Los números en base 10 como \`0.1\` no tienen representación exacta en binario (es una fracción periódica, como 1/3 en decimal).
\`0.1 + 0.2\` **NO** es igual a \`0.3\` en punto flotante. Será algo como \`0.30000000000000004\`.

> **Advertencia**: **NUNCA** use el operador \`==\` para comparar flotantes.

**Solución**: Comparar con un margen de error (epsilon).
\`\`\`cpp
bool casiIguales(double a, double b) {
    return std::abs(a - b) < 1e-9; // Epsilon
}
\`\`\`

# 3. Valores Especiales

*   **Infinity (+inf / -inf)**: Resultado de dividir por cero (\`1.0 / 0.0\`) o desbordamiento.
*   **NaN (Not a Number)**: Resultado de operaciones inválidas (\`0.0 / 0.0\`, \`sqrt(-1)\`).
    *   Propiedad única: \`NaN != NaN\` es **verdadero**. Cualquier comparación con NaN retorna falso (excepto \`!=\`).
    `,
        quiz: {
            question: "¿Por qué (0.1 + 0.2 == 0.3) evalúa a falso en C++?",
            options: ["Error del compilador", "Error de hardware", "Imprecisión inherente a la representación binaria de decimales", "C++ no sabe sumar"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara un double 'pi' con valor 3.14159.",
            initialCode: "",
            expectedRegex: /double\s+pi\s*(=|\{)\s*3\.14159/,
            solution: "double pi = 3.14159;"
        }
    },
    {
        id: 10,
        title: "2.4: Caracteres y Codificación (Unicode)",
        phase: "Módulo 2: Tipos y Memoria",
        description: "ASCII, UTF-8 y los nuevos tipos de caracteres en C++20.",
        content: `
# 1. El Tipo char

Tradicionalmente, \`char\` es 1 byte. Suficiente para ASCII (0-127), que cubre inglés y símbolos básicos.
Sin embargo, \`char\` puede ser \`signed\` o \`unsigned\` dependiendo del compilador.

# 2. El Caos de Unicode

Para soportar idiomas globales (emojis, kanjis, acentos), necesitamos más de 1 byte.
*   **\`wchar_t\`**: Intento antiguo. 2 bytes en Windows (UTF-16), 4 bytes en Linux (UTF-32). **No portable**. Evitar.
*   **\`char8_t\` (C++20)**: Tipo dedicado para UTF-8.
*   **\`char16_t\` (C++11)**: Para UTF-16.
*   **\`char32_t\` (C++11)**: Para UTF-32.

# 3. UTF-8 Everywhere

La recomendación moderna (UTF-8 Manifesto) es usar \`std::string\` (basado en \`char\`) para almacenar texto en UTF-8. UTF-8 es una codificación de longitud variable (1 a 4 bytes por carácter).
*   Es compatible con ASCII.
*   Es eficiente en espacio.
*   Es el estándar de la web.

> **Nota**: \`std::string::length()\` devuelve el número de **bytes**, no de caracteres. En UTF-8, "Ñ" ocupa 2 bytes.
    `,
        quiz: {
            question: "¿Qué tipo introducido en C++20 está diseñado específicamente para UTF-8?",
            options: ["char", "wchar_t", "char8_t", "byte"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara un char con la letra 'A'.",
            initialCode: "",
            expectedRegex: /char\s+\w+\s*(=|\{)\s*'A'/,
            solution: "char c = 'A';"
        }
    },
    {
        id: 11,
        title: "2.5: Constantes y Tiempo de Compilación",
        phase: "Módulo 2: Tipos y Memoria",
        description: "Inmutabilidad, constexpr y evaluación en tiempo de compilación.",
        content: `
# 1. const (Read-Only)

La palabra clave \`const\` es una promesa: "No modificaré esta variable". El compilador hace cumplir esta promesa generando un error si intentas escribir en ella.
\`const int MAX_USERS = 100;\`
Además de seguridad, permite al compilador optimizar (ej. poner la variable en memoria de solo lectura).

# 2. constexpr (Constant Expression)

Introducido en C++11 y mejorado en versiones posteriores. Indica que una expresión **puede** ser evaluada en tiempo de compilación.
\`constexpr int size = 10 * 2;\` -> El compilador calcula \`20\` y lo incrusta en el binario. No hay cálculo en tiempo de ejecución.

# 3. consteval (C++20)

Más estricto que \`constexpr\`. Indica que una función **DEBE** ejecutarse en tiempo de compilación. Si no es posible (ej. los argumentos dependen de input del usuario), genera un error de compilación.

\`\`\`cpp
consteval int cuadrado(int n) { return n * n; }
int x = cuadrado(5); // OK. Compilado como 'int x = 25;'
int y; cin >> y;
int z = cuadrado(y); // ERROR. 'y' no es constante.
\`\`\`
    `,
        quiz: {
            question: "¿Qué palabra clave de C++20 fuerza la ejecución inmediata (tiempo de compilación)?",
            options: ["const", "constexpr", "consteval", "static"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara una constante entera PI_APROX con valor 3.",
            initialCode: "",
            expectedRegex: /const\s+int\s+PI_APROX\s*(=|\{)\s*3/,
            solution: "const int PI_APROX = 3;"
        }
    },

    // ===========================================================================
    // MÓDULO 3: OPERADORES Y EXPRESIONES
    // ===========================================================================
    {
        id: 12,
        title: "3.1: Operadores Aritméticos y Precedencia",
        phase: "Módulo 3: Operadores",
        description: "Reglas de evaluación, división entera y módulo.",
        content: `
# 1. División Entera

En C++, el operador \`/\` se comporta diferente según los tipos de sus operandos.
*   Si ambos son enteros: **División Entera** (trunca la parte decimal). \`5 / 2\` es \`2\`.
*   Si al menos uno es flotante: **División Real**. \`5.0 / 2\` es \`2.5\`.

# 2. Operador Módulo (%)

Retorna el resto de la división entera. Solo funciona con enteros.
\`5 % 2\` es \`1\`.
Útil para determinar paridad (\`x % 2 == 0\`) o índices circulares (\`idx = (idx + 1) % size\`).

# 3. Precedencia y Asociatividad

C++ tiene una tabla de precedencia compleja.
1.  \`::\` (Scope)
2.  \`()\` \`[]\` \`.\` \`->\`
3.  \`++\` \`--\` (Sufijo)
4.  \`++\` \`--\` (Prefijo) \`*\` (Dereferencia) \`&\` (Address)
...
12. \`=\` (Asignación)

> **Consejo**: No memorice la tabla completa. Use paréntesis \`()\` para hacer explícita su intención. Es más legible y seguro.
    `,
        quiz: {
            question: "¿Cuál es el resultado de la expresión entera 7 / 2?",
            options: ["3.5", "3", "4", "Error"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Calcula el resto de dividir 10 entre 3 y guárdalo en 'r'.",
            initialCode: "int r;",
            expectedRegex: /r\s*=\s*10\s*%\s*3/,
            solution: "r = 10 % 3;"
        }
    },
    {
        id: 4,
        title: "1.2: Variables y Tipos Fundamentales",
        phase: "Módulo 1: Fundamentos",
        description: "El sistema de tipos de C++, inicialización uniforme y tipos aritméticos.",
        content: `
# Variables y Tipos

C++ es un lenguaje de **tipado estático y fuerte**.
*   **Estático**: Los tipos se verifican en tiempo de compilación. Una vez declarada una variable como \`int\`, no puede cambiar a \`string\`.
*   **Fuerte**: El compilador no permite operaciones absurdas entre tipos incompatibles sin una conversión explícita (cast).

## 1. Inicialización
En C++ moderno, la regla de oro es: **Inicializa siempre tus variables**. Una variable no inicializada tiene un valor basura indeterminado.

### Formas de Inicialización
\`\`\`cpp
int a = 5;      // Asignación (Copy Initialization) - Herencia de C
int b(5);       // Constructor (Direct Initialization)
int c{5};       // Uniforme (List Initialization) - ¡RECOMENDADO!
int d{};        // Inicialización por defecto (Zero Initialization) -> d es 0
\`\`\`

> **Best Practice**: Usa siempre **List Initialization** (\`{}\`).
> *   Es consistente para todos los tipos.
> *   Previene el *Narrowing Conversion* (pérdida de datos). \`int x{3.5};\` dará error de compilación, mientras que \`int x = 3.5;\` truncará silenciosamente a 3.

## 2. Tipos Fundamentales
C++ ofrece un conjunto de tipos primitivos mapeados directamente al hardware.

*   **Enteros**:
    *   \`int\`: Al menos 16 bits, usualmente 32 bits. Rango: -2,147,483,648 a +2,147,483,647.
    *   \`long long\`: Al menos 64 bits. Para números astronómicos.
*   **Punto Flotante**:
    *   \`double\`: Precisión doble (64 bits). **Usa este por defecto**.
    *   \`float\`: Precisión simple (32 bits). Úsalo solo si la memoria es crítica.
*   **Texto**:
    *   \`char\`: Un solo byte (ASCII). \`char c = 'A';\`
*   **Lógicos**:
    *   \`bool\`: \`true\` o \`false\`.

## 3. Deducción de Tipos (\`auto\`)
Desde C++11, el compilador puede deducir el tipo de una variable por su inicializador.

\`\`\`cpp
auto vida = 100;      // vida es int
auto nombre = "Alex"; // nombre es const char*
auto pi = 3.14159;    // pi es double
\`\`\`

**¿Cuándo usar \`auto\`?**
*   Siempre que el tipo sea obvio (ej: \`auto i = 0;\`).
*   Cuando el tipo es muy complejo de escribir (iteradores, lambdas).
*   **No** lo uses si oscurece la intención del código.

## 4. Inmutabilidad (\`const\`)
Si una variable no debe cambiar, márcala como \`const\`.

\`\`\`cpp
const double GRAVEDAD = 9.81;
GRAVEDAD = 10.0; // ¡Error de compilación!
\`\`\`

> **Consejo**: Haz todo \`const\` por defecto. Solo quítalo si *realmente* necesitas modificar el valor.
        `,
        quiz: {
            question: "¿Qué sucede si intentas compilar 'int x{3.5};'?",
            options: ["Se compila y x vale 3", "Se compila y x vale 3.5", "Error de compilación (Narrowing Conversion)", "Advertencia (Warning)"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara una constante llamada 'PI' con valor 3.14159 usando 'double' y la sintaxis de inicialización uniforme.",
            initialCode: "// Tu código aquí\n",
            expectedRegex: /const\s+double\s+PI\s*\{\s*3\.14159\s*\}\s*;/,
            solution: "const double PI{3.14159};"
        }
    },
    {
        id: 13,
        title: "3.2: Incremento y Efectos Secundarios",
        phase: "Módulo 3: Operadores",
        description: "Prefijo vs Sufijo y el costo oculto.",
        content: `
# 1. Prefijo (++i) vs Sufijo (i++)

Aunque ambos incrementan la variable, su semántica de retorno es distinta:

*   **Prefijo (\`++i\`)**: Incrementa la variable y retorna el **nuevo valor** (referencia).
*   **Sufijo (\`i++\`)**: Crea una copia del valor actual, incrementa la variable original, y retorna la **copia antigua**.

# 2. Impacto en Rendimiento

Para tipos primitivos (\`int\`), el compilador optimiza ambos a la misma instrucción de ensamblador.
Sin embargo, para **Iteradores** o clases complejas, \`i++\` implica:
1.  Construir una copia temporal.
2.  Incrementar.
3.  Destruir la copia temporal.

Esto es un costo innecesario.
> **Best Practice**: Use siempre **Prefijo (\`++i\`)** por defecto, a menos que específicamente necesite el valor antiguo.

# 3. Undefined Behavior en Expresiones

C++ no define el orden de evaluación de operandos en la mayoría de los casos.
\`f(i++, i++)\` -> **Undefined Behavior**. No sabemos qué argumento se evalúa primero. Nunca modifique una variable dos veces en la misma expresión.
    `,
        quiz: {
            question: "¿Por qué se prefiere ++it sobre it++ para iteradores?",
            options: ["Es más bonito", "Evita la creación de una copia temporal del objeto", "Es un estándar antiguo", "it++ está deprecado"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Incrementa la variable 'x' usando el operador de prefijo.",
            initialCode: "int x = 0;",
            expectedRegex: /\+\+x/,
            solution: "++x;"
        }
    },
    {
        id: 14,
        title: "3.3: Operadores Lógicos y Short-Circuit",
        phase: "Módulo 3: Operadores",
        description: "Lógica booleana y evaluación perezosa.",
        content: `
# 1. Operadores Lógicos

*   \`&&\` (AND): Verdadero si ambos son verdaderos.
*   \`||\` (OR): Verdadero si al menos uno es verdadero.
*   \`!\` (NOT): Invierte el valor.

# 2. Evaluación de Cortocircuito (Short-Circuit)

C++ garantiza que los operandos lógicos se evalúan de izquierda a derecha y se detienen tan pronto como el resultado es definitivo.

*   **AND (\`A && B\`)**: Si A es falso, el resultado es falso. B **nunca** se evalúa.
*   **OR (\`A || B\`)**: Si A es verdadero, el resultado es verdadero. B **nunca** se evalúa.

Esto es fundamental para la seguridad:
\`\`\`cpp
if (ptr != nullptr && ptr->isValid()) { ... }
\`\`\`
Si \`ptr\` es nulo, la segunda parte no se ejecuta, evitando un crash por dereferencia nula.

# 3. No confundir con Bitwise

\`&\` y \`|\` son operadores a nivel de bit. No hacen cortocircuito y trabajan con enteros, no booleanos lógicos. Confundirlos es un bug común.
    `,
        quiz: {
            question: "En la expresión (false && funcion()), ¿se ejecuta 'funcion()'?",
            options: ["Sí", "No", "Depende del compilador", "A veces"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Escribe una condición segura que verifique si 'ptr' no es nulo Y su valor es mayor a 0.",
            initialCode: "int* ptr = nullptr;",
            expectedRegex: /ptr\s*&&\s*\*\s*ptr\s*>\s*0/,
            solution: "if (ptr && *ptr > 0)"
        }
    },
    {
        id: 15,
        title: "3.4: Operadores Bitwise (Manipulación de Bits)",
        phase: "Módulo 3: Operadores",
        description: "Máscaras, desplazamientos y operaciones de bajo nivel.",
        content: `
# 1. Operadores Bitwise

Operan sobre la representación binaria de los enteros. Esenciales en sistemas embebidos, drivers y criptografía.

*   \`&\` (AND): 1 si ambos bits son 1. (Máscara para extraer bits).
*   \`|\` (OR): 1 si alguno es 1. (Máscara para encender bits).
*   \`^\` (XOR): 1 si son diferentes. (Toggle).
*   \`~\` (NOT): Invierte todos los bits (Complemento a uno).
*   \`<<\` (Left Shift): Desplaza bits a la izquierda. Equivale a multiplicar por 2^N.
*   \`>>\` (Right Shift): Desplaza a la derecha. Equivale a dividir por 2^N.

# 2. Flags y Máscaras

Se usan bits individuales para almacenar estados booleanos compactos.

\`\`\`cpp
const uint8_t FLAG_VISIBLE = 0x01; // 0000 0001
const uint8_t FLAG_ALIVE   = 0x02; // 0000 0010

uint8_t estado = 0;
estado |= FLAG_VISIBLE; // Encender (Set)
if (estado & FLAG_VISIBLE) { ... } // Comprobar (Check)
estado &= ~FLAG_VISIBLE; // Apagar (Clear)
\`\`\`
    `,
        quiz: {
            question: "¿Qué operador se usa para 'apagar' (poner a 0) un bit específico usando una máscara?",
            options: ["| (OR)", "& (AND) con el inverso (~)", "^ (XOR)", ">> (Shift)"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Multiplica la variable 'x' por 8 usando desplazamiento de bits.",
            initialCode: "int x = 2;",
            expectedRegex: /x\s*<<\s*3/,
            solution: "x = x << 3;"
        }
    },

    // ===========================================================================
    // MÓDULO 4: ÁMBITO Y ALMACENAMIENTO (SCOPE & STORAGE)
    // ===========================================================================
    {
        id: 16,
        title: "4.1: Ámbito (Scope) y Duración de Almacenamiento",
        phase: "Módulo 4: Scope y Storage",
        description: "Vida y visibilidad de las variables: Stack vs Static vs Heap.",
        content: `
# 1. Ámbito (Scope) vs Duración (Lifetime)

*   **Ámbito**: Dónde es visible el nombre de una variable (tiempo de compilación).
*   **Duración**: Cuándo existe el objeto en memoria (tiempo de ejecución).

# 2. Tipos de Duración de Almacenamiento

1.  **Automática (Stack)**: Variables locales. Se crean al entrar al bloque y se destruyen al salir. Es la más rápida y segura.
2.  **Estática (Static)**: Variables globales o \`static\` locales. Se crean al inicio del programa y viven hasta el final.
3.  **Dinámica (Heap)**: Controlada manualmente con \`new\`/\`delete\` o smart pointers.
4.  **Thread Local**: Una instancia por hilo (\`thread_local\`).

# 3. La Palabra Clave 'static'

Es una de las palabras más sobrecargadas en C++.
*   **Dentro de una clase**: El miembro pertenece a la clase, no a las instancias.
*   **Dentro de una función**: La variable persiste entre llamadas (duración estática).
*   **En el ámbito global**: La variable/función tiene **Linkage Interno** (solo visible en este archivo .cpp).

> **Consejo**: Evite variables estáticas no constantes. Son el enemigo del multithreading y las pruebas unitarias.
    `,
        quiz: {
            question: "¿Cuándo se destruye una variable local estática (static) declarada dentro de una función?",
            options: ["Al salir de la función", "Nunca", "Al finalizar el programa", "Cuando se llama al destructor manualmente"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara una variable 'contador' que mantenga su valor entre llamadas a la función.",
            initialCode: "void funcion() {\n    // Tu código\n}",
            expectedRegex: /static\s+int\s+contador/,
            solution: "static int contador = 0;"
        }
    },
    {
        id: 17,
        title: "4.2: Namespaces y Resolución de Nombres",
        phase: "Módulo 4: Scope y Storage",
        description: "Evitando colisiones de nombres y organizando el código.",
        content: `
# 1. El Problema de la Colisión

Si dos librerías definen una clase \`Vector\`, el compilador no sabrá cuál usar. Los Namespaces resuelven esto creando ámbitos con nombre.

\`\`\`cpp
namespace Fisica {
    class Vector { ... };
}
namespace Graficos {
    class Vector { ... };
}
Fisica::Vector v1;
Graficos::Vector v2;
\`\`\`

# 2. La Directiva 'using'

*   **\`using namespace std;\`**: Importa **todo** el namespace al ámbito actual. **MALA PRÁCTICA** en archivos de cabecera (.h) porque contamina el namespace global de quien incluya tu archivo.
*   **\`using std::cout;\`**: Importa solo un símbolo. Mucho más seguro.

# 3. Namespaces Anónimos

\`namespace { ... }\`
Todo lo declarado aquí es accesible solo dentro del archivo actual (equivalente a \`static\` global, pero más moderno). Úselo para funciones auxiliares privadas del módulo.
    `,
        quiz: {
            question: "¿Por qué se considera mala práctica poner 'using namespace std;' en un archivo de cabecera (.h)?",
            options: ["Hace la compilación lenta", "Contamina el namespace global de todos los archivos que incluyan ese header", "No es estándar", "Causa errores de linkado"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara un namespace llamado 'MiMotor'.",
            initialCode: "",
            expectedRegex: /namespace\s+MiMotor\s*\{/,
            solution: "namespace MiMotor {}"
        }
    },

    // ===========================================================================
    // MÓDULO 5: FLUJO DE CONTROL
    // ===========================================================================
    {
        id: 18,
        title: "5.1: Selección (if, switch) y Atributos",
        phase: "Módulo 5: Control Flow",
        description: "Ramificación condicional avanzada y [[fallthrough]].",
        content: `
# 1. If con Inicializador (C++17)

Permite declarar una variable cuyo ámbito se limita al bloque if/else.
\`\`\`cpp
if (auto val = GetValue(); val > 0) {
    // val existe aquí
} else {
    // val existe aquí también
}
// val NO existe aquí
\`\`\`
Muy útil para capturar códigos de error o mutex locks.

# 2. Switch y [[fallthrough]]

Por defecto, los casos en un switch "caen" al siguiente si no hay \`break\`. Esto suele ser un bug, pero a veces es intencional.
En C++17, use el atributo \`[[fallthrough]]\` para indicar al compilador (y a otros humanos) que la caída es intencional y silenciar warnings.

\`\`\`cpp
switch (token) {
    case TOKEN_A:
        procesarA();
        [[fallthrough]]; // Intencional
    case TOKEN_B:
        procesarB();
        break;
}
\`\`\`
    `,
        quiz: {
            question: "¿Qué atributo de C++17 silencia la advertencia de 'caída' (fallthrough) en un switch?",
            options: ["[[nodiscard]]", "[[maybe_unused]]", "[[fallthrough]]", "[[noreturn]]"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Escribe un if con inicialización que declare 'x = 5' y compruebe si 'x > 0'.",
            initialCode: "",
            expectedRegex: /if\s*\(\s*(int|auto)\s+x\s*(=|\{)\s*5\s*(\}|;)\s*x\s*>\s*0\s*\)/,
            solution: "if (int x = 5; x > 0) {}"
        }
    },
    {
        id: 19,
        title: "5.2: Bucles y Range-Based For",
        phase: "Módulo 5: Control Flow",
        description: "Iteración moderna y eficiente.",
        content: `
# 1. Range-Based For (C++11)

La forma preferida de iterar sobre contenedores (arrays, vectores).

\`\`\`cpp
std::vector<int> vec = {1, 2, 3};
for (const auto& elem : vec) {
    std::cout << elem;
}
\`\`\`
*   **\`auto\`**: Copia cada elemento (costoso para objetos grandes).
*   **\`auto&\`**: Referencia (modificable).
*   **\`const auto&\`**: Referencia de solo lectura (lo más común).

# 2. Init-Statement en For-Range (C++20)

Permite inicializar una variable auxiliar antes del bucle.
\`\`\`cpp
for (int i = 0; auto& x : coleccion) {
    std::cout << i++ << ": " << x << "\\n";
}
\`\`\`

# 3. Break y Continue

*   **\`break\`**: Sale del bucle inmediatamente.
*   **\`continue\`**: Salta el resto del cuerpo y va a la siguiente iteración.
    `,
        quiz: {
            question: "¿Cuál es la forma más eficiente de iterar un vector de objetos grandes (sin copiarlos) en modo lectura?",
            options: ["for (auto x : vec)", "for (auto& x : vec)", "for (const auto& x : vec)", "for (int i=0; i<vec.size(); ++i)"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Escribe un range-based for que itere sobre 'nums' usando referencia constante.",
            initialCode: "std::vector<int> nums;\n// Tu código",
            expectedRegex: /for\s*\(\s*const\s+auto&\s+\w+\s*:\s*nums\s*\)/,
            solution: "for (const auto& n : nums) {}"
        }
    },

    // ===========================================================================
    // MÓDULO 6: FUNCIONES
    // ===========================================================================
    {
        id: 20,
        title: "6.1: Parámetros y Paso por Valor/Referencia",
        phase: "Módulo 6: Funciones",
        description: "Optimizando la transferencia de datos.",
        content: `
# 1. Paso por Valor (Default)

Se crea una **copia** del argumento.
\`void foo(int x);\`
Seguro, pero lento para objetos grandes.

# 2. Paso por Referencia (const &)

Se pasa la dirección de memoria, pero con sintaxis de variable normal.
\`void foo(const std::string& str);\`
*   **Eficiente**: No hay copia.
*   **Seguro**: \`const\` impide modificaciones.
> **Regla**: Usa \`const T&\` para todo lo que sea más grande que un puntero (objetos, strings, vectores).

# 3. Paso por Puntero

\`void foo(int* ptr);\`
Similar a la referencia, pero puede ser \`nullptr\`. Úsalo solo si el argumento es opcional.
    `,
        quiz: {
            question: "¿Cuál es la forma recomendada de pasar un std::string a una función si no se va a modificar?",
            options: ["Por valor (std::string s)", "Por referencia constante (const std::string& s)", "Por puntero (std::string* s)", "Por referencia (std::string& s)"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara una función 'imprimir' que reciba un string por referencia constante.",
            initialCode: "",
            expectedRegex: /void\s+imprimir\s*\(\s*const\s+std::string&\s+\w+\s*\)/,
            solution: "void imprimir(const std::string& s);"
        }
    },
    {
        id: 21,
        title: "6.2: Sobrecarga y Argumentos por Defecto",
        phase: "Módulo 6: Funciones",
        description: "Polimorfismo estático.",
        content: `
# 1. Sobrecarga (Overloading)

Puedes tener múltiples funciones con el mismo nombre si sus parámetros (firma) son distintos.
\`void print(int i);\`
\`void print(double d);\`

El compilador decide cuál llamar basándose en los tipos de los argumentos (Name Mangling).

# 2. Argumentos por Defecto

\`void conectar(int timeout = 5000);\`
Los argumentos por defecto deben ir al final.
> **Cuidado**: Si cambias el valor por defecto en el .h, debes recompilar todo el código cliente, ya que el valor se "pega" en el punto de llamada.
    `,
        quiz: {
            question: "¿Qué requisito deben cumplir los argumentos por defecto?",
            options: ["Deben ser constantes", "Deben estar al final de la lista de parámetros", "Deben ser punteros", "No hay requisitos"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara una función 'log' que tome un mensaje y un nivel de severidad (int) con valor por defecto 1.",
            initialCode: "",
            expectedRegex: /void\s+log\s*\(\s*(std::)?string\s+\w+\s*,\s*int\s+\w+\s*=\s*1\s*\)/,
            solution: "void log(string msg, int level = 1);"
        }
    },

    // ===========================================================================
    // MÓDULO 7: PUNTEROS Y REFERENCIAS
    // ===========================================================================
    {
        id: 22,
        title: "7.1: Punteros y Memoria",
        phase: "Módulo 7: Punteros",
        description: "El poder y el peligro de C++.",
        content: `
# 1. ¿Qué es un Puntero?

Una variable que almacena una **dirección de memoria**.
\`int* ptr = &x;\`
*   \`&\` (Address-of): Obtiene la dirección.
*   \`*\` (Dereference): Accede al valor en esa dirección.

# 2. nullptr (C++11)

Antiguamente se usaba \`NULL\` (que es 0). Esto causaba ambigüedad en sobrecargas (\`int\` vs \`int*\`).
\`nullptr\` es un tipo seguro. Úsalo siempre.

# 3. Punteros void*

Puntero genérico. Puede apuntar a cualquier cosa, pero no se puede dereferenciar sin un cast. Es la base del polimorfismo en C puro.
    `,
        quiz: {
            question: "¿Qué palabra clave moderna reemplaza a NULL?",
            options: ["nil", "null", "nullptr", "None"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara un puntero a entero inicializado a nulo.",
            initialCode: "",
            expectedRegex: /int\*\s+\w+\s*(=|\{)\s*nullptr/,
            solution: "int* p = nullptr;"
        }
    },
    {
        id: 23,
        title: "7.2: Referencias vs Punteros",
        phase: "Módulo 7: Punteros",
        description: "Cuándo usar cuál.",
        content: `
# Referencias (T&)
*   **No pueden ser nulas**.
*   **Deben inicializarse** al declararse.
*   **No pueden reasignarse** (siempre refieren al mismo objeto).
*   Sintaxis más limpia (uso con \`. \` en lugar de \`->\`).

# Punteros (T*)
*   Pueden ser \`nullptr\`.
*   Pueden reasignarse.
*   Permiten aritmética (avanzar en un array).

> **Best Practice**: Usa **Referencias** por defecto. Usa **Punteros** solo si necesitas que sea opcional (nulo) o reasignable.
    `,
        quiz: {
            question: "¿Puede una referencia en C++ ser nula?",
            options: ["Sí", "No", "Depende del compilador", "Solo si es const"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara una referencia 'ref' a la variable 'x'.",
            initialCode: "int x = 10;\n// Tu código",
            expectedRegex: /int&\s+ref\s*(=|\{)\s*x/,
            solution: "int& ref = x;"
        }
    },

    // ===========================================================================
    // MÓDULO 8: ARRAYS Y STRINGS
    // ===========================================================================
    {
        id: 24,
        title: "8.1: C-Style Arrays vs std::array",
        phase: "Módulo 8: Arrays",
        description: "Modernizando los arreglos.",
        content: `
# C-Style Arrays
\`int arr[5];\`
*   Decaen a punteros automáticamente (pérdida de información de tamaño).
*   No tienen métodos \`.size()\`.
*   Peligrosos.

# std::array (C++11)
Un wrapper delgado sobre arrays fijos.
\`std::array<int, 5> arr;\`
*   No decae a puntero.
*   Conoce su tamaño.
*   Compatible con algoritmos de la STL.
*   **Costo cero** de rendimiento respecto a C-Arrays.

> **Consejo**: Usa siempre \`std::array\` para tamaños fijos y \`std::vector\` para dinámicos.
    `,
        quiz: {
            question: "¿Cuál es la principal desventaja de los arrays estilo C al pasarlos a funciones?",
            options: ["Son lentos", "Decaen a punteros y pierden su tamaño", "No pueden almacenar objetos", "Ocupan más memoria"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara un std::array de 3 flotantes.",
            initialCode: "#include <array>\n",
            expectedRegex: /std::array<\s*float\s*,\s*3\s*>\s+\w+/,
            solution: "std::array<float, 3> arr;"
        }
    },
    {
        id: 25,
        title: "8.2: std::string y std::string_view",
        phase: "Módulo 8: Arrays",
        description: "Manejo eficiente de texto.",
        content: `
# std::string
Dueño de la memoria. Realiza copias profundas.
\`std::string s = "Hola";\` (Allocation en Heap si es largo).

# std::string_view (C++17)
Una "ventana" de solo lectura a una cadena existente.
No copia, no asigna memoria. Solo guarda un puntero y una longitud.
Ideal para parámetros de funciones.

\`\`\`cpp
void procesar(std::string_view sv) {
    // Rápido, funciona con std::string y "literales"
}
\`\`\`
    `,
        quiz: {
            question: "¿Qué ventaja tiene string_view sobre string como parámetro?",
            options: ["Es modificable", "Evita copias de memoria y asignaciones", "Es compatible con C", "Tiene más métodos"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Escribe una función que reciba un string_view.",
            initialCode: "#include <string_view>\n",
            expectedRegex: /void\s+\w+\s*\(\s*std::string_view\s+\w+\s*\)/,
            solution: "void f(std::string_view s);"
        }
    },
    {
        id: 26,
        title: "9.1: Clases y Layout en Memoria",
        phase: "Módulo 9: OOP",
        description: "Cómo se representan los objetos en RAM.",
        content: `
# 1. El Puntero 'this'

Dentro de cualquier método no estático, existe un puntero oculto llamado \`this\`.
\`this\` contiene la dirección del objeto sobre el cual se invocó el método.

\`\`\`cpp
class Punto {
    int x;
    void setX(int x) {
        this->x = x; // Desambiguación
    }
};
\`\`\`

# 2. Layout en Memoria

Una clase en C++ es (casi) idéntica a una \`struct\` en C.
*   Solo almacena los **datos miembros** (variables).
*   Las **funciones miembros** NO ocupan espacio en el objeto (están en el segmento de código).
*   El tamaño del objeto es la suma de sus miembros + padding.

\`\`\`cpp
class Vacia {};
sizeof(Vacia); // Es 1, no 0. Cada objeto debe tener una dirección única.
\`\`\`

# 3. RAII (Resource Acquisition Is Initialization)

El idioma más importante de C++.
*   **Constructor**: Adquiere el recurso (memoria, archivo, lock).
*   **Destructor**: Libera el recurso.

Como el destructor se llama automáticamente cuando el objeto sale de ámbito (scope), es imposible olvidar liberar el recurso, incluso si hay excepciones.
    `,
        quiz: {
            question: "¿Qué almacena un objeto de una clase en su memoria asignada (sin funciones virtuales)?",
            options: ["Sus variables miembro y punteros a sus funciones", "Solo sus variables miembro (y padding)", "Todo el código de la clase", "Nada"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara un destructor para la clase 'Archivo'.",
            initialCode: "class Archivo {\npublic:\n    // Tu código\n};",
            expectedRegex: /~Archivo\s*\(\s*\)/,
            solution: "~Archivo() {}"
        }
    },
    {
        id: 27,
        title: "9.2: Herencia y Polimorfismo (V-Table)",
        phase: "Módulo 9: OOP",
        description: "El costo oculto de las funciones virtuales.",
        content: `
# 1. Herencia Pública

\`class Perro : public Animal { ... };\`
Modela una relación "ES-UN". El Perro puede usarse donde se espere un Animal.

# 2. Funciones Virtuales y V-Table

Para lograr polimorfismo dinámico (que \`animal->hablar()\` llame a \`Perro::hablar\` en tiempo de ejecución), usamos \`virtual\`.

**¿Cómo funciona? (Under the Hood)**
1.  El compilador agrega un puntero oculto (\`vptr\`) al inicio de cada objeto de la clase.
2.  Este puntero apunta a una tabla estática (\`vtable\`) que contiene las direcciones de las funciones virtuales.
3.  Cada llamada virtual implica una indirección extra: \`objeto->vptr->funcion()\`.

> **Costo**: Aumenta el tamaño del objeto (8 bytes por el puntero) y hace la llamada ligeramente más lenta (y previene inlining).

# 3. override y final (C++11)

*   **\`override\`**: Asegura que estás sobrescribiendo una función virtual de la base. Si te equivocas en la firma, da error de compilación.
*   **\`final\`**: Impide que una clase sea heredada o una función sea sobrescrita. Permite al compilador devirtualizar llamadas (optimización).
    `,
        quiz: {
            question: "¿Qué estructura de datos oculta usa C++ para implementar el despacho dinámico de funciones virtuales?",
            options: ["Hash Map", "V-Table (Virtual Method Table)", "Linked List", "Binary Tree"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Declara una función virtual pura 'dibujar' en la clase 'Forma'.",
            initialCode: "class Forma {\npublic:\n    // Tu código\n};",
            expectedRegex: /virtual\s+void\s+dibujar\s*\(\s*\)\s*=\s*0\s*;/,
            solution: "virtual void dibujar() = 0;"
        }
    },

    // ===========================================================================
    // MÓDULO 10: TEMPLATES Y METAPROGRAMACIÓN
    // ===========================================================================
    {
        id: 28,
        title: "10.1: Templates de Funciones y Clases",
        phase: "Módulo 10: Templates",
        description: "Programación genérica: Escribe una vez, usa con cualquier tipo.",
        content: `
# 1. La Idea de los Templates

C++ es un lenguaje fuertemente tipado. Para no escribir \`max(int, int)\`, \`max(float, float)\`, etc., usamos templates.
El compilador genera el código para cada tipo usado (**Instanciación**).

\`\`\`cpp
template <typename T>
T maximo(T a, T b) {
    return (a > b) ? a : b;
}
\`\`\`

# 2. Bloat (Hinchazón) del Binario

Si usas \`maximo<int>\`, \`maximo<float>\` y \`maximo<double>\`, el compilador genera **tres** funciones distintas en el ejecutable final. El uso excesivo de templates puede aumentar el tamaño del binario.

# 3. Especialización

Puedes definir una implementación específica para un tipo concreto.
\`template <> const char* maximo(const char* a, const char* b) { ... }\`
    `,
        quiz: {
            question: "¿Cuándo se genera el código máquina de una función template?",
            options: ["Al escribir el código", "Al compilar la definición del template", "Al instanciar el template (usarlo con un tipo concreto)", "En tiempo de ejecución"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara un template de clase 'Caja' que contenga un elemento de tipo T.",
            initialCode: "",
            expectedRegex: /template\s*<\s*typename\s+T\s*>\s*class\s+Caja/,
            solution: "template <typename T> class Caja {};"
        }
    },
    {
        id: 29,
        title: "10.2: Concepts (C++20)",
        phase: "Módulo 10: Templates",
        description: "Restringiendo los templates para mensajes de error humanos.",
        content: `
# 1. El Problema de los Templates Antiguos

Si instanciabas un template con un tipo inválido (ej. ordenar un objeto que no tiene operador \`<\`), obtenías 100 líneas de errores crípticos del compilador.

# 2. Concepts

Los Conceptos son predicados en tiempo de compilación que restringen qué tipos son aceptables.

\`\`\`cpp
template <typename T>
requires std::integral<T> // Solo acepta enteros
T sumar(T a, T b) {
    return a + b;
}
\`\`\`

Si intentas \`sumar("hola", "mundo")\`, el error será: "El tipo const char* no satisface el concepto std::integral". Claro y conciso.

# 3. Auto Constraints

Sintaxis abreviada en C++20:
\`void funcion(std::integral auto x);\`
Es equivalente a un template restringido.
    `,
        quiz: {
            question: "¿Cuál es el propósito principal de los Concepts en C++20?",
            options: ["Hacer el código más rápido", "Restringir los tipos de los templates y mejorar los mensajes de error", "Permitir herencia múltiple", "Reducir el tamaño del ejecutable"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Define una función template 'cuadrado' que SOLO acepte tipos de punto flotante (std::floating_point).",
            initialCode: "#include <concepts>\n",
            expectedRegex: /requires\s+std::floating_point/,
            solution: "template<typename T> requires std::floating_point<T> T cuadrado(T x) { return x*x; }"
        }
    },

    // ===========================================================================
    // MÓDULO 11: GESTIÓN DE MEMORIA MODERNA
    // ===========================================================================
    {
        id: 30,
        title: "11.1: Smart Pointers (unique_ptr, shared_ptr)",
        phase: "Módulo 11: Memoria",
        description: "El fin de new y delete manuales.",
        content: `
# 1. std::unique_ptr

Propiedad exclusiva. No se puede copiar, solo mover.
Es tan eficiente como un puntero crudo (tamaño y velocidad).
\`std::unique_ptr<int> p = std::make_unique<int>(10);\`
Cuando \`p\` sale de ámbito, hace \`delete\` automáticamente.

# 2. std::shared_ptr

Propiedad compartida. Usa un **Contador de Referencias** (atómico).
El objeto se destruye solo cuando el último \`shared_ptr\` muere.
> **Costo**: Ocupa el doble (2 punteros) y tiene overhead por la atomicidad del contador. Úsalo solo si realmente necesitas compartir propiedad.

# 3. std::weak_ptr

Rompe ciclos de referencias circulares en \`shared_ptr\`. No incrementa el contador.
    `,
        quiz: {
            question: "¿Qué smart pointer tiene CERO overhead comparado con un puntero crudo?",
            options: ["std::shared_ptr", "std::weak_ptr", "std::unique_ptr", "std::auto_ptr"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Crea un unique_ptr de entero con valor 5 usando make_unique.",
            initialCode: "#include <memory>\n",
            expectedRegex: /std::make_unique<\s*int\s*>\s*\(\s*5\s*\)/,
            solution: "auto p = std::make_unique<int>(5);"
        }
    },
    {
        id: 31,
        title: "11.2: Move Semantics (Semántica de Movimiento)",
        phase: "Módulo 11: Memoria",
        description: "Optimizando copias innecesarias.",
        content: `
# 1. L-values vs R-values

*   **L-value**: Tiene nombre y dirección (ej. \`int x\`).
*   **R-value**: Temporal, sin nombre (ej. \`5\`, \`x + y\`, retorno de función).

# 2. std::move

Convierte un L-value en un R-value, permitiendo "robar" sus recursos.
\`vector<int> v2 = std::move(v1);\`
\`v2\` roba el puntero interno de \`v1\`. \`v1\` queda vacío pero válido.
Es una operación O(1), mientras que copiar el vector sería O(N).

# 3. Regla de los 5

Si defines uno de estos, probablemente necesites definir los 5:
1.  Destructor
2.  Constructor de Copia
3.  Operador de Asignación de Copia
4.  Constructor de Movimiento
5.  Operador de Asignación de Movimiento
    `,
        quiz: {
            question: "¿Qué hace std::move(x)?",
            options: ["Mueve x a otra dirección de memoria", "Convierte x (cast) a una referencia R-value (x&&)", "Borra x", "Copia x"],
            correctAnswer: 1
        },
        codeChallenge: {
            instruction: "Usa std::move para transferir 's1' a 's2'.",
            initialCode: "std::string s1 = \"largo\";\nstd::string s2;",
            expectedRegex: /s2\s*=\s*std::move\s*\(\s*s1\s*\)/,
            solution: "s2 = std::move(s1);"
        }
    },

    // ===========================================================================
    // MÓDULO 12: PATRONES DE DISEÑO
    // ===========================================================================
    {
        id: 32,
        title: "12.1: Singleton (Meyers Implementation)",
        phase: "Módulo 12: Patrones",
        description: "La forma Thread-Safe correcta en C++.",
        content: `
# El Problema
Garantizar una única instancia de una clase.

# Meyers Singleton
En C++11, las variables estáticas locales son inicializadas de forma **Thread-Safe** automáticamente.

\`\`\`cpp
class Singleton {
public:
    static Singleton& get() {
        static Singleton instance; // Mágico y seguro
        return instance;
    }
    Singleton(const Singleton&) = delete; // Prohibir copia
private:
    Singleton() {}
};
\`\`\`
Esta es la implementación estándar de oro hoy en día.
    `,
        quiz: {
            question: "¿Qué garantiza C++11 sobre la inicialización de variables estáticas locales?",
            options: ["Es Thread-Safe", "Es asíncrona", "Es lazy", "No garantiza nada"],
            correctAnswer: 0
        },
        codeChallenge: {
            instruction: "Borra el operador de asignación para hacer la clase no copiable.",
            initialCode: "class S {\npublic:\n    // Tu código\n};",
            expectedRegex: /operator\s*=\s*\(\s*const\s+S&\s*\)\s*=\s*delete/,
            solution: "void operator=(const S&) = delete;"
        }
    },
    {
        id: 33,
        title: "12.2: Factory Pattern",
        phase: "Módulo 12: Patrones",
        description: "Desacoplando la creación.",
        content: `
# Factory Method
En lugar de \`new Perro()\`, usa \`AnimalFactory::crear("perro")\`.

# Retorno Moderno
Una Factory moderna NO debe retornar \`Animal*\` (quien libera?).
Debe retornar \`std::unique_ptr<Animal>\`. Esto transfiere la propiedad claramente al llamador.

\`\`\`cpp
std::unique_ptr<Animal> crearAnimal(Tipo t) {
    if (t == PERRO) return std::make_unique<Perro>();
    return nullptr;
}
\`\`\`
    `,
        quiz: {
            question: "¿Qué tipo de retorno es ideal para una Factory en C++ moderno?",
            options: ["void*", "Puntero crudo (T*)", "std::unique_ptr<T>", "Referencia (T&)"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Declara una función que retorne un unique_ptr de 'Widget'.",
            initialCode: "",
            expectedRegex: /std::unique_ptr<\s*Widget\s*>\s+\w+/,
            solution: "std::unique_ptr<Widget> crear();"
        }
    },

    // ===========================================================================
    // MÓDULO 13: HERRAMIENTAS PROFESIONALES
    // ===========================================================================
    {
        id: 34,
        title: "13.1: CMake y Build Systems",
        phase: "Módulo 13: Tooling",
        description: "Más allá de g++ main.cpp.",
        content: `
# CMake
No compila código. Genera archivos para otros sistemas (Makefiles, Ninja, Visual Studio).
Es el estándar de la industria.

# CMakeLists.txt Básico
\`\`\`cmake
cmake_minimum_required(VERSION 3.10)
project(MiProyecto)

set(CMAKE_CXX_STANDARD 20)

add_executable(app main.cpp utils.cpp)
\`\`\`

# Targets
En CMake moderno, pensamos en "Targets" (ejecutables o librerías) y sus propiedades, no en variables globales.
    `,
        quiz: {
            question: "¿Qué hace realmente CMake?",
            options: ["Compila el código C++", "Enlaza las librerías", "Genera archivos de construcción para otro sistema (como Make o Ninja)", "Ejecuta el programa"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Escribe el comando CMake para definir el estándar C++ 20.",
            initialCode: "# CMakeLists.txt\n",
            expectedRegex: /set\s*\(\s*CMAKE_CXX_STANDARD\s+20\s*\)/,
            solution: "set(CMAKE_CXX_STANDARD 20)"
        }
    },
    {
        id: 35,
        title: "13.2: Sanitizers (ASan, TSan)",
        phase: "Módulo 13: Tooling",
        description: "Detectores de bugs en tiempo de ejecución.",
        content: `
# Address Sanitizer (ASan)
Detecta:
*   Buffer Overflows (leer fuera del array).
*   Use-after-free (usar memoria liberada).
*   Memory Leaks.

Uso: \`g++ -fsanitize=address -g ...\`
Si ocurre un error, el programa se detiene y muestra un stack trace detallado.

# Thread Sanitizer (TSan)
Detecta **Data Races** (condiciones de carrera) en programas multihilo.
Uso: \`g++ -fsanitize=thread -g ...\`

> **Nota**: TSan ralentiza el programa ~10x. Úsalo en tests, no en producción.
    `,
        quiz: {
            question: "¿Qué flag de compilador activa Address Sanitizer?",
            options: ["-Wall", "-O3", "-fsanitize=address", "-fcheck-memory"],
            correctAnswer: 2
        },
        codeChallenge: {
            instruction: "Escribe el flag para activar Thread Sanitizer.",
            initialCode: "",
            expectedRegex: /-fsanitize=thread/,
            solution: "-fsanitize=thread"
        }
    }
];
