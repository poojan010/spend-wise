package com.spendwise.smsreader

import android.content.Context
import android.database.Cursor
import android.net.Uri
import android.util.Log
import com.facebook.react.bridge.*
import org.json.JSONArray
import org.json.JSONObject

class SmsReaderModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val context: Context = reactContext.applicationContext

    override fun getName(): String {
        return "SmsReader"
    }

    @ReactMethod
    fun readMessages(promise: Promise) {
        try {
            val messages = fetchInboxMessages()
            promise.resolve(messages.toString()) // Convert JSONArray to a JSON string for JavaScript
        } catch (e: Exception) {
            Log.e("SmsReader", "Error fetching SMS: ${e.message}", e)
            promise.reject("SMS_FETCH_ERROR", e)
        }
    }


    private fun fetchInboxMessages(): JSONArray {
        val messages = JSONArray()
        val uri = Uri.parse("content://sms/inbox")
        val projection = arrayOf("_id", "address", "date", "body")

        val cursor: Cursor? = context.contentResolver.query(uri, projection, null, null, "date DESC")

        cursor?.use {
            Log.d("SmsReader", "Found ${it.count} messages.")

            if (it.moveToFirst()) {
                do {
                    try {
                        val id = it.getString(it.getColumnIndexOrThrow("_id"))
                        val address = it.getString(it.getColumnIndexOrThrow("address"))
                        val date = it.getLong(it.getColumnIndexOrThrow("date"))
                        val body = it.getString(it.getColumnIndexOrThrow("body"))

                        val message = JSONObject()
                        message.put("id", id)
                        message.put("address", address)
                        message.put("date", date)
                        message.put("body", body)

                        messages.put(message)

                        Log.d("SmsReader", "Message added: $message")
                    } catch (e: Exception) {
                        Log.e("SmsReader", "Error parsing message: ${e.message}", e)
                    }
                } while (it.moveToNext())
            } else {
                Log.d("SmsReader", "Cursor is empty.")
            }
        } ?: Log.e("SmsReader", "Cursor is null.")

        Log.d("SmsReader", "Returning ${messages.length()} messages.")
        return messages
    }

}
