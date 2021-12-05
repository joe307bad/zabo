# Zabo
## Development
```
// Start nats + sphqxe/nats-webui
docker-compose up -d
```
```
// Run microservices
nx run-many --target=serve --projects=zabo,backups --parallel
```
## Add a component
```
nx g @nrwl/react:component button --project=design-react --export
```
```
// generate .stories.ts
nx g @nrwl/react:stories --project=design-react
```
## ToDo frontend
- [X] Build `lib/design/tailwind` that takes a high level tailwind configuration and generates the utility classes/css
- [ ] When I change `lib/design/tailwind/src/tailwind.css` I want the storybook instance of `lib/design/react` to reload
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
