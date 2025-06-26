✅ Part 1: API on EC2
Endpoint /hello: Returns "Hello, World!"

Endpoint /status: Displays system uptime

Framework: Node.js with Express

✅ Part 2: Lambda + API Gateway
Lambda Function: Written in Node.js

API Gateway Endpoint: /lambda

Returns: { "message": "Hello from AWS Lambda!" }

Security
EC2 Security Group: Ports 22 (SSH) and 80 (HTTP) are open

IAM: Basic role for Lambda (AWSLambdaBasicExecutionRole)

Monitoring
Lambda Logs: Available in CloudWatch

EC2 Logs: Managed using PM2

How to Test
EC2: http://18.224.229.234/hello

Lambda: https://su1o806gzh.execute-api.us-east-2.amazonaws.com/HelloLambdaFunction
