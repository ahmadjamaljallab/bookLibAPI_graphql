# GraphQL Basics

## Introduction
GraphQL is a query language for APIs that provides a more efficient and powerful alternative to the traditional REST API.

## GraphQL Syntax
In GraphQL, you define the structure of your data and the server returns only the data you requested.

### Queries
Queries in GraphQL are used to request specific data from the server.

```graphql
query {
  Author(id: 123) {
    name
    age
    books [list]
  }
}
