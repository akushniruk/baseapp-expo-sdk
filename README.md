# BASEAPP-EXPO-SDK

## Concept

```bash
└── src/
    ├── widgets/                # Independent and self-contained blocks for pages (combination of services and features)
    ├── services/               # Business services that domain logic operates with
    └── shared/                 # Reused modules, non business specific
```

## Layers order

If you look at the order of the layers , you can distinguish two general patterns:

**By the level of knowledge/responsibility**

`widgets` > `services` > `shared`

The module "knows" only about itself and the underlying modules, but not the ones lying above

This also affects the allowed imports

**By the level of danger of changes**

`shared` > `services` > `widgets`

The lower the module is located , the more dangerous it is to make changes to it

| Layer        | Content                                                                                                   | Allowed Segments   |
|--------------|-----------------------------------------------------------------------------------------------------------|--------------------|
| **widgets**  | The slices inside include the combination of features, enteties and shared components                     | ui lib model (api) |
| **enteties** | The slices inside represent a disparate set of submodules for using                                       | ui lib model (api) |
| **shared**   | Contains only infrastructure logic without BL (1)                                                         | ui lib api         |

## Slices

---
**SELF-CHECK**

"What scope of BL does the module affect?"

Before that , it is necessary to determine the scope of responsibility (layer)

---

```bash
├── widgets/
|   # Slices implementing independent page blocks
|   ├── header
|   ├── feed
|   └── ...
├── services/
|   # Slices of business services for implementing a more complex BL
|   ├── viewer
|   ├── posts
|   ├── i18n
|   └── ...
├── shared/
|    # Does not have specific slices
|    # is rather a set of commonly used segments, without binding to the BL
```

## Segments

```bash
{layer}/
    ├── {slice}/
    |   ├── ui/                     # UI-logic (components, ui-widgets,...)
    |   ├── model/                  # Business logic (store, actions, effects, reducers,...)
    |   ├── lib/                    # Infrastructure logic (utils/helpers)
    |   ├── config*/                # Configuration (of the project / slice)
    |   └── api*/                   # Logic of API requests (api instances, requests,...)
```

At the same time, each segment can be represented as a file, or as a separate directory - depending on the complexity and size

## How to import from SDK

### Component

```js
import { Button } from 'baseapp-expo-sdk/shared/component/button'
```

### Widget

```js
import { Login } from 'baseapp-expo-sdk/widgets/iam/authentication/login'
```

```js
import { Register } from 'baseapp-expo-sdk/widgets/iam/authentication/register'
```

### AuthProvider

```js
import { AuthProvider } from 'baseapp-expo-sdk/shared/providers/auth'
```
