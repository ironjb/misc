#MongoDB

Import Data

```bash
mongoimport --db DATABASENAME --collection COLLECTIONNAME --drop --file JSON-FILE-TO-IMPORT
```

Here is a link to the mongo shell reference [mongo Shell Quick Reference](https://docs.mongodb.org/manual/reference/mongo-shell/)

Start MongoDB

```bash
mongo
```

View list of databases

```bash
show dbs
```

Switch to database

```bash
use DATABASENAME
```

Insert

```
db.COLLECTIONNAME.insert( { "key": "value" } )
```

Find() - show everyting in collection

```
db.COLLECTIONNAME.find()
```

Find(...) - (Note: You should include quotation marks for they key otherwise you get an error when searching child nodes)

```
db.COLLECTIONNAME.find( { "parent.key": "value" } )

// Greater/Less Than
db.COLLECTIONNAME.find( { "parent.key": { $gt: 10 }, "parent.key2": { $lt: 30 } } )

// AND operator - just use a comma
db.COLLECTIONNAME.find( { "key1": "value1", "key2": "value2" } )

// OR operator
db.COLLECTIONNAME.find( { $or: [ {"key1": "value1" }, { "key2": "value2" } ] } )
```

Sort - (**1** for ascending and **-1** for descending)

```
db.COLLECTIONNAME.find().sort( { "key1": 1, "key2": -1 } )
```

Update

```
db.COLLECTIONNAME.update(
	// First find the document(s) you want to update
	{ "key": "value" },

	// Now update with the new values
	{
		$set: { "key": "new-value" },

		// Sets "date-key" field to the current date
		$currentDate { "date-key": true },

		// Use _dot notation_ when updating embedded fields
		{ $set: { "parent.key": "new-value" } }
	},

	// To update multiple fields you must supply the _multi_ option
	{ multi: true }
)
```

Replacing Documents (rows) - use the Update()

```
db.COLLECTIONNAME.update(
	// Finding the document to replace
	{ "idKey": "<id-number>" },

	// New data to replace old
	{
		"newKey1": "newValue1",
		"newParentKey2": {
			"newChildKey1": [ "new", "array", "value" ],
			"newChildKey2": "new value",
			"newChildKey3": 1234
		}
	},

	// You can add _upsert_ option in order to add the document if it does not exist
	{ upsert: true }
)
```

Remove

```
db.COLLECTIONNAME.remove(
	{ "searchKey", "searchValue" },

	//Provide _justOne_ to only affect one of the matching documents.
	{  justOne: true }
)
```

Remove all documents from collection

```
db.COLLECTIONNAME.remove( { } )
```

Drop a collection

```
db.COLLECTIONNAME.drop()
```