 .PHONY: default install start test

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project's dependencies
	docker-compose run --rm --no-deps ra-demo bash -ci ' \
		yarn && \
		cd ../rest && yarn && \
		cd ../admin && yarn \
	'

start: ## Start project
	docker-compose up -d

stop: ## Stop project
	docker-compose down

logs: ## Display logs from docker
	docker-compose logs -f

connect: ## open a terminal within Node container
	docker-compose exec ra-demo bash
