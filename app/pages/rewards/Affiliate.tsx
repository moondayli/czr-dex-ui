import { Helmet } from "react-helmet-async";
import { useTranslation } from "@orderly.network/i18n";
import { generatePageTitle } from "@/utils/utils";
import { Dashboard, ReferralProvider } from "@orderly.network/affiliate";
import { getRuntimeConfig } from "@/utils/runtime-config";
import { withBasePath } from "@/utils/base-path";

export default function RewardsAffiliate() {
  const { t } = useTranslation();
  const brokerName = getRuntimeConfig("VITE_ORDERLY_BROKER_NAME");
  const referralLinkUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://app.czrdex.com";
  const affiliatePageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${withBasePath("/rewards/affiliate")}`
      : "https://app.czrdex.com/rewards/affiliate";

  return (
    <>
      <Helmet>
        <title>{generatePageTitle(t("common.affiliate"))}</title>
      </Helmet>
      <ReferralProvider
        becomeAnAffiliateUrl={affiliatePageUrl}
        learnAffiliateUrl={affiliatePageUrl}
        referralLinkUrl={referralLinkUrl}
        overwrite={{
          shortBrokerName: brokerName,
          brokerName: brokerName,
        }}
      >
        <Dashboard.DashboardPage
          classNames={{
            root: "oui-flex oui-justify-center",
            home: "oui-py-6 oui-px-4 lg:oui-px-6 lg:oui-py-12 xl:oui-pl-4 xl:oui-pr-6 oui-w-full",
            dashboard: "oui-py-6 oui-px-4 lg:oui-px-6 xl:oui-pl-3 xl:oui-pr-6",
          }}
        />
      </ReferralProvider>
    </>
  );
}
