import IconCloud from "./ui/icon-cloud";

const slugs = [
  "kubernetes",
  "terraform",
  "ansible",
  "prometheus",
  "jenkins",
  "grafana",
  "awslambda",
  "azuredevops",
  "gitops",
  "helm",
  "istio",
  "vault",
  "docker",
  "git",
  "github",
  "gitlab",
  "amazonaws",
  "azurepipelines",
  "circleci",
  "argocd",
  "consul",
  "datadog",
  "elastic",
  "gcp",
  "kibana",
  "pulumi",
  "rancher",
  "redis",
  "splunk",
  "vagrant"
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
