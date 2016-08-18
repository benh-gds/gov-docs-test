# API Listing

This content was generated from a Swagger file using swagger2markup.

Note that an interactive API explorer could be added using SwaggerUI.

<a name="overview"></a>
## Overview
GOV.UK Pay API.


### Version information
*Version* : 1.0.0


### URI scheme
*Host* : publicapi.pymnt.uk  
*Schemes* : HTTPS



<a name="definitions"></a>
## Definitions

<a name="createpaymentrequest"></a>
### CreatePaymentRequest
The Payment Request Payload


|Name|Description|Schema|
|---|---|---|
|**amount**  <br>*required*|amount in pence  <br>**Example** : `12000`|integer(int32)|
|**description**  <br>*required*|payment description  <br>**Example** : `"New passport application"`|string|
|**reference**  <br>*required*|payment reference  <br>**Example** : `"12345"`|string|
|**return_url**  <br>*required*  <br>*read-only*|service return url  <br>**Example** : `"https://service-name.gov.uk/transactions/12345"`|string|


<a name="payment-error"></a>
### Payment Error
A Payment Error response


|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|**Example** : `"P0102"`|string|
|**description**  <br>*optional*|**Example** : `"Invalid attribute value: amount. Must be less than or equal to 10000000"`|string|
|**field**  <br>*optional*|**Example** : `"amount"`|string|


<a name="payment-event-information"></a>
### Payment Event information
A List of Payment Events information


|Name|Description|Schema|
|---|---|---|
|**_links**  <br>*optional*||[payment-event-link](#payment-event-link)|
|**payment_id**  <br>*optional*  <br>*read-only*|**Example** : `"hu20sqlact5260q2nanm0q8u93"`|string|
|**state**  <br>*optional*|state|[Payment state](#payment-state)|
|**updated**  <br>*optional*  <br>*read-only*|updated  <br>**Example** : `"updated_date"`|string|


<a name="payment-state"></a>
### Payment state
A structure representing the current state of the payment in its lifecycle.


|Name|Description|Schema|
|---|---|---|
|**code**  <br>*required*  <br>*read-only*|What went wrong with the Payment if it finished with an error - error code  <br>**Example** : `"P010"`|string|
|**finished**  <br>*required*  <br>*read-only*|Whether the payment has finished  <br>**Default** : `false`|boolean|
|**message**  <br>*required*  <br>*read-only*|What went wrong with the Payment if it finished with an error - English message  <br>**Example** : `"User cancelled the payment"`|string|
|**status**  <br>*required*  <br>*read-only*|Current progress of the payment in its lifecycle  <br>**Example** : `"created"`|string|


<a name="paymenteventsinformation"></a>
### PaymentEventsInformation
A List of Payment Events information


|Name|Description|Schema|
|---|---|---|
|**_links**  <br>*optional*||[linksForEvents](#linksforevents)|
|**events**  <br>*optional*||< [Payment Event information](#payment-event-information) > array|
|**payment_id**  <br>*optional*  <br>*read-only*|**Example** : `"hu20sqlact5260q2nanm0q8u93"`|string|


<a name="paymentforsearchresult"></a>
### PaymentForSearchResult

|Name|Description|Schema|
|---|---|---|
|**_links**  <br>*optional*||[linksForSearchResults](#linksforsearchresults)|
|**amount**  <br>*optional*  <br>*read-only*|**Example** : `1200`|integer(int64)|
|**created_date**  <br>*optional*  <br>*read-only*|**Example** : `"2016-01-21T17:15:00Z"`|string|
|**description**  <br>*optional*  <br>*read-only*|**Example** : `"Your Service Description"`|string|
|**payment_id**  <br>*optional*  <br>*read-only*|**Example** : `"hu20sqlact5260q2nanm0q8u93"`|string|
|**payment_provider**  <br>*optional*  <br>*read-only*|**Example** : `"worldpay"`|string|
|**reference**  <br>*optional*  <br>*read-only*|**Example** : `"your-reference"`|string|
|**return_url**  <br>*optional*  <br>*read-only*|**Example** : `"http://your.service.domain/your-reference"`|string|
|**state**  <br>*optional*||[Payment state](#payment-state)|


<a name="paymentsearchresults"></a>
### PaymentSearchResults

|Name|Description|Schema|
|---|---|---|
|**results**  <br>*optional*||< [PaymentForSearchResult](#paymentforsearchresult) > array|


<a name="paymentwithalllinks"></a>
### PaymentWithAllLinks

|Name|Description|Schema|
|---|---|---|
|**_links**  <br>*optional*||[allLinksForAPayment](#alllinksforapayment)|
|**amount**  <br>*optional*  <br>*read-only*|**Example** : `1200`|integer(int64)|
|**created_date**  <br>*optional*  <br>*read-only*|**Example** : `"2016-01-21T17:15:00Z"`|string|
|**description**  <br>*optional*  <br>*read-only*|**Example** : `"Your Service Description"`|string|
|**payment_id**  <br>*optional*  <br>*read-only*|**Example** : `"hu20sqlact5260q2nanm0q8u93"`|string|
|**payment_provider**  <br>*optional*  <br>*read-only*|**Example** : `"worldpay"`|string|
|**reference**  <br>*optional*  <br>*read-only*|**Example** : `"your-reference"`|string|
|**return_url**  <br>*optional*  <br>*read-only*|**Example** : `"http://your.service.domain/your-reference"`|string|
|**state**  <br>*optional*||[Payment state](#payment-state)|


<a name="alllinksforapayment"></a>
### allLinksForAPayment
self,events and next links of a Payment


|Name|Description|Schema|
|---|---|---|
|**cancel**  <br>*optional*|cancel|[paymentPOSTLink](#paymentpostlink)|
|**events**  <br>*optional*|events|[paymentLink](#paymentlink)|
|**next_url**  <br>*optional*|next_url|[paymentLink](#paymentlink)|
|**next_url_post**  <br>*optional*|next_url_post|[paymentPOSTLink](#paymentpostlink)|
|**self**  <br>*optional*|self|[paymentLink](#paymentlink)|


<a name="linksforevents"></a>
### linksForEvents
links for events resource


|Name|Description|Schema|
|---|---|---|
|**self**  <br>*optional*|self|[paymentLink](#paymentlink)|


<a name="linksforsearchresults"></a>
### linksForSearchResults
links for search payment resource


|Name|Description|Schema|
|---|---|---|
|**cancel**  <br>*optional*|cancel|[paymentPOSTLink](#paymentpostlink)|
|**events**  <br>*optional*|events|[paymentLink](#paymentlink)|
|**self**  <br>*optional*|self|[paymentLink](#paymentlink)|


<a name="payment-event-link"></a>
### payment-event-link
Resource link for a payment of a payment event


|Name|Description|Schema|
|---|---|---|
|**payment_url**  <br>*optional*|payment_url|[paymentLink](#paymentlink)|


<a name="paymentlink"></a>
### paymentLink
A link related to a payment


|Name|Description|Schema|
|---|---|---|
|**href**  <br>*optional*  <br>*read-only*|**Example** : `"https://an.example.link/from/payment/platform"`|string|
|**method**  <br>*optional*  <br>*read-only*|**Example** : `"GET"`|string|


<a name="paymentpostlink"></a>
### paymentPOSTLink
A POST link related to a payment


|Name|Description|Schema|
|---|---|---|
|**href**  <br>*optional*  <br>*read-only*|**Example** : `"https://an.example.link/from/payment/platform"`|string|
|**method**  <br>*optional*  <br>*read-only*|**Example** : `"POST"`|string|
|**params**  <br>*optional*||< string, object > map|
|**type**  <br>*optional*|**Example** : `"multipart/form-data"`|string|






<a name="paths"></a>
## Paths

<a name="newpayment"></a>
### Create new payment
```
POST /v1/payments
```


#### Description
Create a new payment for the account associated to the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


#### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Body**|**body**  <br>*required*|requestPayload|[CreatePaymentRequest](#createpaymentrequest)||


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**201**|Created|[PaymentWithAllLinks](#paymentwithalllinks)|
|**400**|Bad request|[Payment Error](#payment-error)|
|**401**|Credentials are required to access this resource|No Content|
|**422**|Invalid attribute value: description. Must be less than or equal to 255 characters length|[Payment Error](#payment-error)|
|**500**|Downstream system error|[Payment Error](#payment-error)|


#### Consumes

* `application/json`


#### Produces

* `application/json`


<a name="searchpayments"></a>
### Search payments
```
GET /v1/payments
```


#### Description
Search payments by reference, state, 'from' and 'to' date. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


#### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Query**|**display_size**  <br>*optional*|Number of results to be shown per page, should be a positive integer (optional, defaults to 500)|string||
|**Query**|**from_date**  <br>*optional*|From date of payments to be searched (this date is inclusive). Example=2015-08-13T12:35:00Z|string||
|**Query**|**page**  <br>*optional*|Page number requested for the search, should be a positive integer (optional, defaults to 1)|string||
|**Query**|**reference**  <br>*optional*|Your payment reference to search|string||
|**Query**|**state**  <br>*optional*|State of payments to be searched. Example=success|enum (range[created, started, submitted, success, failed, cancelled, error)||
|**Query**|**to_date**  <br>*optional*|To date of payments to be searched (this date is exclusive). Example=2015-08-14T12:35:00Z|string||


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[PaymentSearchResults](#paymentsearchresults)|
|**401**|Credentials are required to access this resource|No Content|
|**422**|Invalid parameters: from_date, to_date, status. See Public API documentation for the correct data formats|[Payment Error](#payment-error)|
|**500**|Downstream system error|[Payment Error](#payment-error)|


#### Produces

* `application/json`


<a name="getpayment"></a>
### Find payment by ID
```
GET /v1/payments/{paymentId}
```


#### Description
Return information about the payment The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


#### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**paymentId**  <br>*required*||string||


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[PaymentWithAllLinks](#paymentwithalllinks)|
|**401**|Credentials are required to access this resource|No Content|
|**404**|Not found|[Payment Error](#payment-error)|
|**500**|Downstream system error|[Payment Error](#payment-error)|


#### Produces

* `application/json`


<a name="cancelpayment"></a>
### Cancel payment
```
POST /v1/payments/{paymentId}/cancel
```


#### Description
Cancel a payment based on the provided payment ID and the Authorisation token. The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'. A payment can only be cancelled if it's in a state that isn't finished.


#### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**paymentId**  <br>*required*||string||


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**204**|No Content|No Content|
|**400**|Cancellation of payment failed|[Payment Error](#payment-error)|
|**401**|Credentials are required to access this resource|No Content|
|**404**|Not found|[Payment Error](#payment-error)|
|**500**|Downstream system error|[Payment Error](#payment-error)|


#### Produces

* `application/json`


<a name="getpaymentevents"></a>
### Return payment events by ID
```
GET /v1/payments/{paymentId}/events
```


#### Description
Return payment events information about a certain payment The Authorisation token needs to be specified in the 'authorization' header as 'authorization: Bearer YOUR_API_KEY_HERE'


#### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**paymentId**  <br>*required*||string||


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[PaymentEventsInformation](#paymenteventsinformation)|
|**401**|Credentials are required to access this resource|No Content|
|**404**|Not found|[Payment Error](#payment-error)|
|**500**|Downstream system error|[Payment Error](#payment-error)|


#### Produces

* `application/json`



