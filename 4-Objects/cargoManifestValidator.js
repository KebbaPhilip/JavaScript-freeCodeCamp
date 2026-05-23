const normalizeUnits = (manifest) => {
  const result = { ...manifest };

  if (result.unit === "lb") {
    result.weight = result.weight * 0.45;
    result.unit = "kg";
  }

  return result;
};

const validateManifest = (manifest) => {
  const errors = {};

  if (typeof manifest !== "object" || manifest === null) {
    return { manifest: "Invalid" };
  }

  if (!Object.hasOwn(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    manifest.containerId <= 0 ||
    !Number.isInteger(manifest.containerId)
  ) {
    errors.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim().length === 0
  ) {
    errors.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    errors.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

const processManifest = (manifest) => {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
};
