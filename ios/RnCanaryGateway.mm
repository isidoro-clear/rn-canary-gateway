#import "RnCanaryGateway.h"

@implementation RnCanaryGateway
RCT_EXPORT_MODULE()

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

RCT_EXPORT_METHOD(initialize:(NSString *)apiKey)
{
    NSLog(@"Initializing CanaryGateway with API key: %@", apiKey);
    // Initialize connection with Canary services
}

RCT_EXPORT_METHOD(sendEvent:(NSString *)eventName data:(NSDictionary *)data)
{
    NSLog(@"Sending event: %@ with data: %@", eventName, data);
    // Send event to Canary backend
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRnCanaryGatewaySpecJSI>(params);
}

@end
