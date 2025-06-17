package com.rncanarygateway

import android.util.Log

object CanaryGateway {

    private const val TAG = "CanaryGateway"

    fun initialize(apiKey: String) {
        Log.d(TAG, "Initializing CanaryGateway with API key: $apiKey")
        // inicializa conexão com os serviços da Canary
    }

    fun sendEvent(eventName: String, data: Map<String, Any>) {
        Log.d(TAG, "Sending event: $eventName with data: $data")
        // envia evento para backend da Canary
    }
} 