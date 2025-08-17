# Carpeta: hooks/

### ¿Qué contiene?
Custom Hooks reutilizables para encapsular lógica compartida como manejo de formularios, llamadas a APIs, estado, etc.

### ¿Qué va aquí?
- `useAuth.js`: lógica de autenticación.
- `useForm.js`: manejo de formularios.
- `useFetch.js`: peticiones genéricas.

### ¿Por qué es útil esta separación?
- Promueve reutilización de lógica compleja.
- Mantiene los componentes limpios.
- Aumenta la consistencia en el manejo de efectos y estados.

### Buenas prácticas
- Prefijar siempre con `use`.
- Mantener lógica bien encapsulada.
