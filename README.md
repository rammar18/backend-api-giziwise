# API Docs Giziwise

## Table of Contents

- Sign Up
- Sign In

## Sign Up

- [POST] /signup

### Request Body

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| name      | String | Yes      | Username    |
| email     | String | Yes      | Email       |
| password  | String | Yes      | Password    |
| age       | Number | Yes      | Age         |
| gender    | String | Yes      | Gender      |

### Response

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| message   | String | Message     |

## Sign In

- [POST] /signin

### Request Body

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| email     | String | Yes      | Email       |
| password  | String | Yes      | Password    |

### Response

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| message   | String | Message     |
| name      | String | Username    |
| email     | String | Email       |
| token     | String | Token       |
