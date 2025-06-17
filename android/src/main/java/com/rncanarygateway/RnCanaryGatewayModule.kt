package com.rncanarygateway

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RnCanaryGatewayModule.NAME)
class RnCanaryGatewayModule(reactContext: ReactApplicationContext) :
  NativeRnCanaryGatewaySpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  @ReactMethod
  override fun initialize(apiKey: String) {
    CanaryGateway.initialize(apiKey)
  }

  @ReactMethod
  override fun sendEvent(eventName: String, data: ReadableMap) {
    val map = data.toHashMap() as Map<String, Any>
    CanaryGateway.sendEvent(eventName, map)
  }

  companion object {
    const val NAME = "RnCanaryGateway"
  }
}
