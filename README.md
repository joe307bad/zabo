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

## ToDo
- [X] Messaging across services w/request-response
- [ ] Kong api gateway and tracing with zipkin https://konghq.com/blog/tracing-with-zipkin-in-kong-2-1-0/
- [ ] Build a single lib that holds all the interfaces/contracts for all the microservices
- [ ] implement authentication and route specific authorization
