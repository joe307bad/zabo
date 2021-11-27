# Zabo
## Development
```
// Start nats + sphqxe/nats-webui
docker-compose up -d
```
```
// Run microservices
nx run-many --target=serve --projects=zabo,backups,watcher --parallel
```

## ToDo
- [X] Messaging across services w/request-response + event-based
- [ ] Build a single lib that holds all the interfaces/contracts for all the microservices
- [ ] Send message across microservices and add something to trace messages across microservices
- [ ] Build out a docker-compose.yml focused on spinning up all services + kong api gateway + frontend for development
- [ ] implement authentication and route specific authorization
