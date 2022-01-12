# Zabo
## Development
Start nats + sphqxe/nats-webui
```
docker-compose up -d
```
Run microservices
```
nx run-many --target=serve --projects=zabo,backups --parallel
```
## Add a component
```
nx g @nrwl/react:component button --project=design-react --export
```
Generate `.stories.ts`
```
nx g @nrwl/react:stories --project=design-react
```
## Run `design/tailwind` + `storybook design-react`
Start tailwind watcher that rewrites `tailwind.css` when `tailwind.config.js` is changed
```
nx watch design-tailwind
```
Start storybook for react components, this project references `tailwind.css` and reloads when its changed
```
nx storybook design-react
```
## Compile `design-tailwind` for different platforms
For react-native.
Uses [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn)
```
nx build-rn design-tailwind
```
For react
```
nx build design-tailwind
```

## ToDo frontend
- [X] ✅ Build `libs/design/tailwind` that takes a high level tailwind configuration and generates the utility classes/css
- [X] ✅ When I change `libs/design/tailwind/src/tailwind.css` I want the storybook instance of `libs/design/react` to reload 
- [X] ✅ Optimize `tailwind.css` by only compiling class names used in `libs/design/tailwind/src/index.tsx`
- [X] ✅ Use a central `tailwind.config.js` and compile CSS assets for different platforms (react & react-native)
- [ ] View `design-react-native` Storybook instance simultaneously with `design-react` Storybook instance to have a side by side comparison.
  - [This patch](https://github.com/tk-o/nx-react-native-expo/tree/patch-1) should enable using `nx-react-native-expo`. From here, we will create an expo app solely for the purpose to run a Storybook instance for the components in `design-react-native`
  - Probably will have to [create a `storybook-react-native-expo`](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/) and then run this in parallel with `nx storybook react`
- [ ] Implement a component in `lib/design/react` that utilizes utility first classes from `lib/design/tailwind/src/tailwind.css`
- [ ] Build `lib/design/react` storybook/design system
- [ ] Build `lib/design/angular` storybook/design system
- [ ] [Compose](https://storybook.js.org/docs/react/workflows/storybook-composition#compose-local-storybooks) both to see how easy it is to make changes and see affect components across different frameworks

## ToDo backend
- [X] Messaging across services w/request-response
- [ ] Inter-ms communication
  - [ ] http://diego-pacheco.blogspot.com/2019/02/getting-started-with-istio-and-minikube.html
  - [ ] Kong api gateway and tracing with zipkin https://konghq.com/blog/tracing-with-zipkin-in-kong-2-1-0/
- [ ] Build a single lib that holds all the interfaces/contracts for all the microservices
- [ ] implement authentication and route specific authorization
