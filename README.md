# API Docs Giziwise

## Table of Contents

- Sign Up
- Sign In
- BMI Calculator
- Me/Profile
- Logout

## Sign Up

- [POST] /signup

### Request Body
| Parameter         | Type   | Required | Description      |
| ----------------- | ------ | -------- | ---------------- |
| nama              | String | Yes      | Email            |
| email             | String | Yes      | Email            |
| password          | String | Yes      | Password         |
| confirmPassword   | String | Yes      | Confirm Password |

### Response
| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| message   | String | Message     |

```
{
    "status": "success",
    "message": "User created successfully"
}
```

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

```
{
    "status": "success",
    "message": "Login successfully",
    "data": {
        "id": 8,
        "token": "token jwt"
    }
}
```

## BMI Calculator

- [POST] /bmi
- Cookie token

### Request Body
| Parameter          | Type   | Description   |
| ------------------ | ------ | ------------- |
| weight             | int    | Weight in kg  |
| height             | int    | Height in cm  |
| dob                | date   | Date of birth |
| gender             | String | Gender        |

### Response
| Parameter          | Type   | Description         |
| ------------------ | ------ | ------------------- |
| message            | String | Message             |

```
{
    "status": "success",
    "message": "BMI data saved successfully"
}
```
- [GET] /bmi
- Cookie token

### Response
| Parameter          | Type   | Description         |
| ------------------ | ------ | ------------------- |
| bmi                | float  | Score BMI           |
| category           | String | Weight category     |
| weight             | int    | Weight in kg        |
| height             | int    | Height in cm        |
| age                | int    | Age                 |
| gender             | String | Gender              |
| healthyWeightRange | String | Mantain good weight |
| calory             | float  | Total calories      |

```
{
    "status": "success",
    "data": {
        "bmi": 24.2,
        "category": "Normal",
        "weight": 70,
        "height": 170,
        "age": 24,
        "gender": "male",
        "healthyWeightRange": "53.5 kg - 72 kg",
        "calory": 2046.9
    }
}
```

## Me/Profile

- [GET] /me
- Cookie token

### Response
| Parameter | Type   | Description   |
| --------- | ------ | ------------- |
| nama      | String | Nama          |
| email     | String | email         |
| dob       | date   | Date of birth |
| gender    | String | Gender        |
| age       | int    | Age           |
| height    | int    | Height        |
| weight    | int    | Weight        |


```
{
    "status": "success",
    "data": {
        "id": 8,
        "nama": "namaaku",
        "email": "test@example.com",
        "bmi": {
            "dob": "1999-12-31T17:00:00.000Z",
            "gender": "male",
            "age": 24,
            "weight": 70,
            "height": 170
        }
    }
}
```

## Logout

- [POST] /logout
- Cookie token

### Response
| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| message   | String | Message     |

```
{
    "status": "success",
    "message": "Logout successfully",
}
```